const mongoose = require('mongoose');
const TagsSchema = require("../schemas/tagsSchema");

const Tag = mongoose.model('Tag',
    TagsSchema);
module.exports = Tag;
