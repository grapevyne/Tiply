const db = require('../models/models');

const tipsController = {};

tipsController.createTip = (req, res, next) => {
  const { header, blurb, zip } = req.body;
  const queryString = `INSERT INTO TIPS (HEADER, BLURB, ZIP, TIMESTAMP, VOTES) VALUES ('${header}', '${blurb}', '${zip}', CURRENT_TIMESTAMP, 0)`;
  // console.log('inside controller CreateTip');
  db.query(queryString)
    .then((data) => {
      // console.log(`CREATE TIP:`, header, blurb, zip)
      // console.log('data in createTip: ', data);
      // if (data.rows[0].length !== data.rows[0].length - 1) {
      //   console.log('Created tip');
      res.locals.message = 'Tip created successfully';
      //   next();
      // }
      next();
    })
    .catch((err) => { console.log(err); return next(err); });
};


tipsController.updateVotes = (req, res, next) => {
  const { votes } = req.body;
  const { id } = req.params;

  // find row by ID first then update row's vote column value
  const queryString = `UPDATE tips
  SET votes = ${votes} WHERE id=${id}`;

  db.query(queryString)
    .then((data) => {
      console.log('updateVotes: ', data.rows[0]);
      res.locals.message = 'Votes updated successfully';
      next();
    })
    .catch((err) => next(err));
};

tipsController.findTips = (req, res, next) => {
  console.log('within findTips');
  const { zip } = req.params;
  console.log('req.params', req.params);

  const queryString = `
    SELECT *, tips.id AS "tipId", type AS tag FROM tips
    FULL OUTER JOIN "tipToTags"
    ON tips.id = "tipToTags"."tipId" 
    LEFT OUTER JOIN tags 
    ON "tagId" = tags.id
    WHERE zip = '${zip}'
    `;

  db.query(queryString)
    .then(data => {
      console.log(`Fetch Results for ${zip}: `);
      console.log(data.rows);
      res.locals.tips = data.rows;
      next();
    })
    .catch((err) => {
      res.locals.errors = err;
    });
};

module.exports = tipsController;
