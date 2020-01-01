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

router.get('/findTips/:zip', tipsController.findTips, (req, res) => {
  res.status(200).json({ tips: res.locals.tips });
})

module.exports = router;