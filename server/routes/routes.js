const express = require('express');

const router = express.Router();
const tipsController = require('../controllers/tipsController');

router.post('/createTip', tipsController.createTip, (req, res) => {
  res.json({ message: res.locals.message });
});

router.post('/updateVotes/:id', tipsController.updateVotes, (req, res) => {
  res.json({ message: res.locals.message });
});

router.get('/findTips/:zip', tipsController.findTips, (req, res) => {
  res.status(200).json({ tips: res.locals.tips });
});

// Get all tags from DB
router.get('/tags', tipsController.getAllTags, (req, res) => {
  res.json({ tags: res.locals.tags });
})

module.exports = router;