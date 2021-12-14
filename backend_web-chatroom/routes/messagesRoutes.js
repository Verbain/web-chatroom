const express = require('express');
const { sendMessage } = require('../controllers/messagesController');
const bodyParser = require('body-parser');

const router = express.Router();

const urlEncodedParser = bodyParser.urlencoded({extended:false})

router.post('/send/message', urlEncodedParser, sendMessage);

module.exports = {
    routes: router
}