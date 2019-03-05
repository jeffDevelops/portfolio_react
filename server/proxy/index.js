const router = require('express').Router();

const githubController = require('./githubController');

router.use('/personal_github/:timestamp', githubController.personal);

module.exports = router;