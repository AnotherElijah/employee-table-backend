const express = require('express');
const router = express.Router();
const Worker = require("../models/workerModel");
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.get('/', function (req, res) {
    Worker.find({}).then(data => res.json(data))
});

router.post('/create', function (req, res) {
    const newWorker = new Worker({
        ...req.body
    });
    newWorker.save()
        .then(() => res.status(201).send(
            {message: req.body.firstName + ' ' + req.body.secondName + ' successfully saved'}
            ),
            err=>console.log(err)
        )
});

router.delete('/delete', function (req, res) {
    Worker.deleteOne({_id: req.query.id}).then(() => res.status(201).send({message: 'Worker has been deleted'})
    )
})
module.exports = router;
