var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

//DB
mongoose.connect('mongodb://localhost:27017/meanshoppingcart', {
    useMongoClient: true
});
mongoose.connection.on('connected', () => {
    console.log('~~~MongoDB Connected~~~');
});
mongoose.connection.on('error', (err) => {
    console.log(err);
});

//Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('hehehehe');
});

const itemcrud = require('./routes/itemcrud');
app.use('/admin', itemcrud);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});