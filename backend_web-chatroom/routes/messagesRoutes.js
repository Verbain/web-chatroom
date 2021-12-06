const express = require('express');
const { sendMessage } = require('../controllers/messagesController');

const router = express.Router();

router.post('/send/message', sendMessage);

module.exports = {
    routes: router
}