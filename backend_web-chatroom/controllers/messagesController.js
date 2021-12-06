const {} = require('firebase-admin/firestore');
const db = require('../db');



const sendMessage = async (req,res,next) =>{
    pseudo = req.body.pseudo;
    message = req.body.message
    createdAt = req.body.createdAt
    console.log(pseudo,message,createdAt)
    const collectionRef = db.collection('messages')
    await collectionRef.add({
        name:pseudo,
        text:message,
        createdAt: createdAt
    });
    res.status(201).json({message:"succes"});
}

module.exports = {
    sendMessage
}