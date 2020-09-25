const express = require('express');
const router = express.Router();
const User = require("../models/userModel");
const bodyParser = require('body-parser');
const UserSchema = require("../schemas/userSchema");
router.use(bodyParser.json());

router.post('/user', function (req, res) {
    const newUser = new User({
        ...req.body
    });
    newUser.save()
        .then(() => res.status(201).send(
            {message: req.body.firstName + ' ' + req.body.secondName + ' successfully saved'}
            ),
            err=>console.log(err)
        )
});
router.get('/users', function (req, res) {
    User.find({}).then(data => res.json(data))
});
router.delete('/user', function (req, res) {
    User.deleteOne({_id: req.query.id}).then(() => res.status(201).send({message: 'User has been deleted'})
    )
})
//TODO tags
module.exports = router;
