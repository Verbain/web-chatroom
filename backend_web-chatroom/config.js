const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID,
    TYPE,
    PRIVATE_KEY_ID,
    PRIVATE_KEY,
    CLIENT_EMAIL,
    CLIENT_ID,
    AUTH_URI,
    TOKEN_URI,
    AUTH_PROVIDER,
    CLIENT_CERT_URL,
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');
module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
      },
    type: TYPE,
    project_id:PROJECT_ID,
    private_key_id: PRIVATE_KEY_ID,
    private_key: PRIVATE_KEY,
    client_email: CLIENT_EMAIL,
    client_id: CLIENT_ID,
    auth_uri: AUTH_URI,
    token_uri: TOKEN_URI,
    auth_provider: AUTH_PROVIDER,
    client_cert_url: CLIENT_CERT_URL
}