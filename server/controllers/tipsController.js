const db = require('../models/models');

const tipsController = {};

tipsController.createTip = (req, res, next) => {
  const { header, blurb, zip, tags } = req.body;
  if (header.length !== 0 && blurb.length !== 0 && zip.length === 5) {
    const queryString = `INSERT INTO TIPS (HEADER, BLURB, ZIP, TIMESTAMP, VOTES) VALUES ('${header}', '${blurb}', '${zip}', CURRENT_TIMESTAMP, 0)`;

    const headers = [], blurbs = [];

    db.query(`SELECT header, blurb FROM TIPS`)
      .then((data) => {
        // input validation: just to make sure no tips with same headers and blurbs will be inserted into table
        data.rows.forEach((obj) => {
          headers.push(obj.header);
          blurbs.push(obj.blurb);
        });

        if (!headers.includes(header) && !blurbs.includes(blurb)) {
          db.query(queryString)
            .then(() => {
              res.locals.message = 'Tip created successfully';
              next();
            })
            .catch((err) => { console.log(err); return next(err); });
        }
      })
      .catch((err) => next(err));
  }
};


tipsController.updateVotes = (req, res, next) => {
  const { votes } = req.body;
  const { id } = req.params;

  // find row by ID first then update row's vote column value
  console.log(`id from req.params in updateVotes: `, id, `votes from req.body`, votes)
  const queryString = `UPDATE tips SET votes = ${votes} WHERE id=${id}`;

  db.query(queryString)
    .then(() => {
      res.locals.message = 'Votes updated successfully';
      next();
    })
    .catch((err) => next(err));
};

tipsController.findTips = (req, res, next) => {
  const { zip } = req.params;

  const queryString = `
    SELECT header, timestamp, blurb, zip, votes, tips.id AS "tipId", array_agg(type) AS tags FROM tips
    FULL OUTER JOIN "tipToTags"
    ON tips.id = "tipToTags"."tipId" 
    LEFT OUTER JOIN tags 
    ON "tagId" = tags.id
    WHERE zip = '${zip}'
    GROUP BY tips.id
    `;

  db.query(queryString)
    .then(data => {
      res.locals.tips = data.rows;
      next();
    })
    .catch((err) => {
      res.locals.errors = err;
    });
};

tipsController.getAllTags = (req, res, next) => {
  const queryString = 'SELECT * FROM tags';
  db.query(queryString)
    .then((data) => {
      res.locals.tags = data.rows;
      next();
    })
    .catch((err) => next(err));
}

module.exports = tipsController;
