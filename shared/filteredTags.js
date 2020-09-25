const filteredTags = (worker, tagToRemove) => {
    return worker.tags.filter(tag => tag._id !== tagToRemove);
}
module.exports = filteredTags;
