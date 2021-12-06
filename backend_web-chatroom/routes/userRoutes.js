const express = require('express');
const { sendMessage } = require('../controllers/userController');

const router = express.Router();

router.post('/user', sendMessage);

module.exports = {
    routes: router
}