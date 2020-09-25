const WorkerSchema = require('../schemas/workerSchema');
const mongoose = require('mongoose');

const Worker = mongoose.model('Worker',
    WorkerSchema);
module.exports = Worker;
