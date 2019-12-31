const db = require('../models/models');

const tipsController = {};

tipsController.findTips = (req, res, next) => {
  console.log('within findTips');
  const { zip } = req.body;
  const queryString = `SELECT * FROM tips WHERE zip = ${zip}`;

  db.query(queryString)
    .then(data => {
      res.locals.tips = data.rows;
      next();
    })
    .catch(err => {
      res.locals.errors = err;
      next(err);
    })
};

module.exports = tipsController;