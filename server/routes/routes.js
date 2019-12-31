const express = require('express');
const router = express.Router();

const tipsController = require('../controllers/tipsController');

router.post('/findTips', tipsController.findTips , (req, res) => {
  res.status(200).json({ tips: res.locals.tips });
})

module.exports = router;