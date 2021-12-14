const express = require('express');
const { sendMessage } = require('../controllers/messagesController');
const bodyParser = require('body-parser');

const router = express.Router();

router.post('/send/message/:room', sendMessage);

module.exports = {
    routes: router
}