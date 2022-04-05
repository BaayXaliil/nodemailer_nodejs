const multer  = require('multer');

let diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        const mimeTypes = file.mimetype.split('/')
        const fileType = mimeTypes[1];
        const fileName = file.originalname + "." + fileType;
        cb(null, fileName);
    }
});

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["image/jpg", "image/jpeg", "image/png"]
    allowedMimeTypes.includes(file.mimetype) ? cb(null, true): cb(null, false)
}

let storage = multer({ storage: diskStorage, fileFilter: fileFilter }).single('image');

module.exports = storage;