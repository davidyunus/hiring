const express = require('express');
const router = express.Router();
const { jobScraper } = require('../controllers/jobScraper')
const { createJob, readJobs, updateJob, deleteJob, searchJob, getJobByInfo } = require('../controllers/jobs')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/create', createJob)
router.get('/jobscraper', jobScraper)
router.get('/read', readJobs)
router.get('/:jobInfo', getJobByInfo)
router.get('/search/:query', searchJob)
router.put('/:jobInfo', updateJob)
router.delete('/:jobInfo', deleteJob)

module.exports = router;