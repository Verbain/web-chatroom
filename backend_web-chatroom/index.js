const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const messagesRoutes = require('./routes/messagesRoutes');
const roomsRoutes = require('./routes/roomsRoutes')

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api',messagesRoutes.routes,roomsRoutes.routes);

app.get('/',(req,res) => {
    res.send('hello')
});

app.listen(config.port, () => console.log('App listening on url : ' + config.url))