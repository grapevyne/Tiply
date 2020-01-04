const express = require('express');

const mcache = require('memory-cache');

const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('.'));

const tipsRouter = require('./routes/routes');

app.use('/tips', tipsRouter);

let cache = duration => {
  return (req, res, next) => {
      let key = '_express_' + req.originalUrl || req.originalUrl
      let cachedBody = mcache.get(key);
      if (cachedBody) {
          res.send(cachedBody);
          return
      } else { 
          res.sendResponse = res.send
          res.send = (body) => { 
              mcache.put(key, body, duration * 1000);
              res.sendResponse(body)
          }
          next()
      }
  }
}

app.get('/', cache(10), (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
