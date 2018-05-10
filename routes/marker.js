const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/markerctrl')
const bodyParser = require('body-parser');

router.use (bodyParser.json())
router.use (bodyParser.urlencoded({extended: false}))

router.get('/marker/:id', userCtrl.getMarkerSavedata);

router.post('/marker', userCtrl.addMarkerSavedata);

//router.put('/marker', userCtrl.updateMarkerUid);

//router.patch('/marker', userCtrl.updateMarkerSavedata);

//router.delete('/marker/:id', userCtrl.deleteMarkerSavedata);

module.exports = router;