const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://semana:semana@cluster0-3d4nh.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
});


app.get('/', (req, res) => {
    return res.send(`ola ${req.query.name}`);
});
//app.use(require('./routes'));

app.listen(20000);
