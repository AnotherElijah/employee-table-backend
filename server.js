const express = require('express');
const connectDB = require('./config/db');
const app = express();
const router = require('./controllers/worker.controller');
const tags = require('./controllers/tags.controller');
const seedWorkers = require("./seeds/workerSeeds");

seedWorkers();
app.use('/workers', router);
app.use('/tags', tags);

connectDB();

const PORT = process.env.PORT||5000;

app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`));
