const router = require('express').Router();

const githubController = require('./githubController');

router.use('/personal_github/languages/:timestamp', githubController.languages);
router.use('/personal_github/events/:timestamp', githubController.events);

module.exports = router;