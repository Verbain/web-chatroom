const User = require('../models/user');
const {} = require('firebase-admin/firestore');
const db = require('../db');
const collectionRef = collection(db,"users")
const addUser = async (req,res,next) =>{
    try {
        const data = req.body;
        await addDoc(collectionRef,{"name":"sebastien","password":"test"});
        res.send('Record saved successfuly');
    } catch {
        res.status(400);
    }
}

module.exports = {
    addUser
}