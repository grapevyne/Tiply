const db = require('../models/models');

const tipsController = {};

tipsController.createTip = (req, res, next) => {
  const { header, blurb, zip } = req.body;
  const queryString = `INSERT INTO TIPS (HEADER, BLURB, ZIP, TIMESTAMP, VOTES) VALUES ('${header}', '${blurb}', '${zip}', CURRENT_TIMESTAMP, 0)`;
  console.log('inside controller');
  db.query(queryString)
    .then((data) => {
      console.log('data in createTip: ', data);
      console.log('inside create tip then()');
      if (data.rows[0].length !== data.rows[0].length - 1) {
        console.log('Created tip');
        res.locals.createMessage = 'Tip created successfully';
        next();
      }
    })
    .catch((err) => { console.log(err); return next(err); });
};


tipsController.updateVotes = (req, res, next) => {
  const { votes } = req.body;
  const { id } = req.params;

  const queryString = `SELECT * FROM TIPS WHERE ID=${id}`;

  db.query(queryString)
    .then((data) => {
      console.log('updateVotes: ', data.rows[0]);
      data.rows[0].votes = votes;
      next();
    })
    .catch((err) => next(err));
};

tipsController.findTips = (req, res, next) => {
  console.log('within findTips');
  const { zip } = req.params;
  console.log('req.params', req.params);
  const queryString = `SELECT * FROM tips WHERE zip = '${zip}'`;

  db.query(queryString)
    .then(data => {
      res.locals.tips = data.rows;
      next();
    })
    .catch(err => {
      console.log('Error in tipsController.findTips', err);
      next(err);
    })
};

module.exports = tipsController;
