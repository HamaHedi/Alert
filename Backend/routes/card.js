const express = require('express');
const cardController = require('../controllers/cards');

const router = express.Router();

router.get('/get-card', cardController.getAllCart);
router.get('/get-id', cardController.getCartById);
// router.post('/edit-alert2', alertController.editAlert);
module.exports = router;
