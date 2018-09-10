const Jobs = require('../models/jobs')

module.exports = {
		async createJob (req, res, next) {
			try {
				let create = await Jobs.create(req.body)

				res.status(200)
					.json({
						message: 'create one job done',
						jobs: create
					})
			} catch (err) {
				res.status(400)
					.json({
						message: 'failed create job'
					})
				next(err)
			}
		},
    async readJobs (req, res, next) {
      try {
				let jobs = await Jobs.find().limit(10)

				res.status(200)
					.json({
						message: 'read jobs finished',
						jobs: jobs
					})
			} catch (err) {
				res.status(400)
					.json({
						message: 'failed read job'
					})
				next(err)
			}
		},
		async updateJob (req, res, next) {
			try {
				let update = await Jobs.findOneAndUpdate({ jobInfo: req.params.jobInfo }, req.body)

				res.status(200)
					.json({
						message: 'update job finished',
						job: update
					})
			} catch (err) {
				res.status(400)
					.json({
						message: 'failed update job'
					})
				next(err)
			}
		},
		async deleteJob (req, res, next) {
			try {
				let deleted = await Jobs.findOneAndRemove({ jobInfo: req.params.jobInfo})

				res.status(200)
					.json({
						message: 'succeed delete one job',
						job: deleted
					})
			} catch (err) {
				res.status(400)
					.json({
						message: 'failed delete one job'
					})
				next(err)
			}
		},
		async getJobByInfo (req, res, next) {
			try {
				let job = await Jobs.findOne({ jobInfo: req.params.jobInfo })

				res.status(200)
					.json({
						message: 'get job by info done',
						jobs: job
					})
			} catch (err) {
				res.status(400)
					.json({
						message: 'failed get job info'
					})
				next(err)
			}
		},
		async searchJob (req, res, next) {
			try {
				let search = await Jobs.find({ 'jobName': { '$regex': req.params.query, '$option': 'i' } })

				res.status(200)
					.json({
						message : 'success search job',
						job: search
					})
			} catch (err) {
				res.status(400)
					.json({
						message: 'failed search job'
					})
				next(err)
			}
		}
}