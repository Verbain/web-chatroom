const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const config = require('./config');

const db = initializeApp(config.firebaseConfig);

module.exports = getFirestore();