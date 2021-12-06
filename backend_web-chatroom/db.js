const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { collection, getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const config = require('./config');

const app = initializeApp(
    firebaseConfig = {
        apiKey: "AIzaSyAIVG0pBaibqWo4hSjoKnvJehLQbYMrvfM",
        authDomain: "fir-demo-6b40e.firebaseapp.com",
        projectId: "fir-demo-6b40e",
        storageBucket: "fir-demo-6b40e.appspot.com",
        messagingSenderId: "760188737964",
        appId: "1:760188737964:web:d40b34c708abc6493fc209"
    }
);

module.exports = { 
    getFirestore,
    collection
}