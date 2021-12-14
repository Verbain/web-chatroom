const {} = require('firebase-admin/firestore');
const db = require('../db');



const sendMessage = async (req,res,next) =>{
    pseudo = req.body.pseudo;
    message = req.body.message
    createdAt = req.body.createdAt
    room = req.params.room
    const collectionRef = db.collection(`/rooms/${room}/messages`)
    await collectionRef.add({
        name:pseudo,
        text:message,
        createdAt: createdAt
    });
    res.status(201).json({response:"message send to the chat room " + room})
}

module.exports = {
    sendMessage
}