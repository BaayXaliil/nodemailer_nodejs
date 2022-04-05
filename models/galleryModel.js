var mongoose = require('mongoose');

var GallerySchema = new mongoose.Schema({
    name: { type: String, required: true },
    imagePath: { type: String, required: true }
});

module.exports = mongoose.model('Gallery', GallerySchema);