const User = require('../models/user');
const {} = require('firebase-admin/firestore');
const db = require('../db');
const collection = require('../db');

const addUser = async (req,res,next) =>{
    
        const collectionRef = collection(db, "users")
        const name = req.body.name;
        console.log(name)
        const password = req.body.password;
        console.log(password)
        const payload = { name, password }
        await addDoc(collectionRef, payload);
        res.send('Record saved successfuly');
}

module.exports = {
    addUser
}