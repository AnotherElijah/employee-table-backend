const express = require('express');
const tags = express.Router();
const bodyParser = require('body-parser');
const Tag = require("../models/tagsModel");
const Worker = require("../models/workerModel");
const filteredTags = require("../shared/filteredTags");

tags.use(bodyParser.json());

tags.get('/', function (req, res) {
    Tag.find({}).then(data => res.json(data))
});

tags.get('/create', function (req, res) {
    const newTag = new Tag(
        {name: req.query.name}
    );
    newTag.save()
        .then(() => res.status(201).send(
            {message: req.query.name + ' successfully saved'}
            ),
            err => console.log(err)
        )
});

tags.delete('/delete', function (req, res) {
    Tag.deleteOne({_id: req.query.id}).then(
        () => {
            Worker.find({}).then(
                workers => {
                    workers.map(worker => {
                        Worker.findOneAndUpdate(
                            {_id: worker._id},
                            {tags: filteredTags(worker, req.query.id)},
                            () => {
                            }
                        );
                    })
                    return res.status(201).send({message: 'Tag has been deleted'})
                }

            )
        }
    )
})

tags.put('/remove-workers-tag', function (req, res) {

    Worker.findOneAndUpdate (
        {_id: req.body.worker._id},
        {tags: filteredTags(req.body.worker, req.body.tagId)},
        ()=>{
        }
    ).then(()=>{
            return res.status(201).send({message: 'Tag has been deleted'})
    });
})

tags.put('/add-workers-tag', function (req, res) {

    Worker.findOneAndUpdate (
        {_id: req.body.worker._id},
        {tags: [...req.body.worker.tags, req.body.tag]},
        ()=>{
        }
    ).then(()=>{
            return res.status(201).send({message: 'Tag has been added'})
        });
})

module.exports = tags;
