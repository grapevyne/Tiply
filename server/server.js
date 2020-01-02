const express = require('express');

const path = require('path');

const app = express();

const PORT = 3000;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static('.'));

const tipsRouter = require('./routes/routes');

app.use('/tips', tipsRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res, next) => {
  res.status(500).send('Server Error');
});

app.listen(PORT, () => { console.log(`Listening on port ${PORT}...`); });
