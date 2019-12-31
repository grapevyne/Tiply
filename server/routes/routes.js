const express = require('express');

const router = express.Router();

const tipsController = require('../controllers/tipsController');

router.post('/createTip', tipsController.createTip, (req, res) => {

  res.json({
    message: res.locals.createMessage,
  });
});

router.post('/:id', tipsController.updateVotes, (req, res) => {

});

module.exports = router;
