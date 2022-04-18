const express = require('express');
const alertController = require('../controllers/alert');

const router = express.Router();
router.post('/add', alertController.postAlert);
router.post('/edit-alert', alertController.postEditAlert);
router.delete('/delete-alert/:id', alertController.postDeleteAlert);
router.get('/get-alert', alertController.getAllAlert);
router.get('/get-id', alertController.getAlertById);
// router.post('/edit-alert2', alertController.editAlert);
module.exports = router;
