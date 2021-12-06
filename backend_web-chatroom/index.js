const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = require('./config');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api',userRoutes.routes);

app.get('/',(req,res) => {
    res.send('hello')
});

app.listen(config.port, () => console.log('App listening on url : ' + config.url))