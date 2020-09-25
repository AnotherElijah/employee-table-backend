const mongoose = require('mongoose');

const TagsSchema = new mongoose.Schema({
    name: String,
})

module.exports = TagsSchema;
/*
*
* first name, last name
- office employee works in
- birth date
- phone number
- tags (tags are not hardcoded, need to be able to edit the list of tags)
* */
