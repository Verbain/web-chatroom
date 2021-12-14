const {} = require('firebase-admin/firestore');
const db = require('../db');

const newRoom = async (req,res,next) =>{
    createdAt = req.body.createdAt
    const collectionRef = db.collection(`rooms/${req.body.name}/messages`)
    await collectionRef.add({
        name:'admin',
        text:"Welcome to ur new chat rooms",
        createdAt: createdAt
    });
    res.status(201).json({response:"rooms created with name " + req.body.name})
}

module.exports = {
    newRoom
}