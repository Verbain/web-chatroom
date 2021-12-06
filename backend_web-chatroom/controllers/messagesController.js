const {} = require('firebase-admin/firestore');
const db = require('../db');



const sendMessage = async (req,res,next) =>{
    pseudo = req.body.pseudo;
    message = req.body.message
    createdAt = req.body.createdAt
    room = req.params.room
    console.log(pseudo,message,createdAt,room)
    const collectionRef = db.collection(`/rooms/${room}/messages`)
    await collectionRef.add({
        name:pseudo,
        text:message,
        createdAt: createdAt
    });
}

module.exports = {
    sendMessage
}