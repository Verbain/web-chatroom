const {} = require('firebase-admin/firestore');
const db = require('../db');

const sendMessage = async (req,res,next) =>{
    const collectionRef = db.collection('users')
    await collectionRef.add({
        name:'sebastien',
        text:'test',
    });
}

module.exports = {
    sendMessage
}