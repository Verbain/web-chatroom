const express = require('express');
const { newRoom } = require('../controllers/roomsController');

const router = express.Router();

router.post('/new/rooms', newRoom);

module.exports = {
    routes: router
}