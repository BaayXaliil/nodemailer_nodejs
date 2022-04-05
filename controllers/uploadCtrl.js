const Gallery = require('../models/galleryModel');

const uploadCtrl = {
    uploadImage: async (req, res) => {
        const {name} = req.body;
        const imagePath = "http://localhost:5000/images/" + req.file.filename;
        try {
            const gallery = new Gallery({ name, imagePath})
            const newGallery = await gallery.save();
            res.status(201).json(newGallery)
        } catch (error) {
            res.send(error)
        }
    },
    getImageUrl: async (req, res) => {
        try {
            const galleries = await Gallery.find()
            res.status(200).json({galleries})
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = uploadCtrl;