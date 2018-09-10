const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({
    jobName: {
        type: String,
        required: [true, 'Job name must be filled']
    },
    companyName: {
        type: String,
        required: [true, 'Company name must be filled']
    },
    companyLogo: {
        type: String,
        required: [true, 'Company logo must be filled']
    },
    jobLocation: {
        type: String,
        required: [true, 'Job location must be filled']
    },
    jobFunction: {
        type: String,
        required: [true, 'Job function must be filled']
    },
    jobIndustry: {
        type: String,
        required: [true, 'Job industry must be filled']
    },
    jobInfo: {
        type: String
    }  
}, {
    timestamp: true
})

const Jobs = mongoose.model('Jobs', jobSchema)

module.exports = Jobs