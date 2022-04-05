const express = require('express');
const router = express.Router();
const uploadCtrl = require('../controllers/uploadCtrl');
const storage = require('../middleware/uploadImage')

router.post('/upload', storage, uploadCtrl.uploadImage)
router.get('/upload', uploadCtrl.getImageUrl)

module.exports = router;