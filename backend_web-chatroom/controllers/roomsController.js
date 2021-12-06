const {} = require('firebase-admin/firestore');
const db = require('../db');

const newRoom = async (req,res,next) =>{
    const collectionRef = db.collection(`rooms/${req.body.name}/messages`)
    await collectionRef.add({
        text:"Welcome to ur new chat rooms"
    });
}

module.exports = {
    newRoom
}