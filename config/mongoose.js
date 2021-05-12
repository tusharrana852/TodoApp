const mongoose = require('mongoose');

// creating Database with name Todo_list
mongoose.connect('mongodb://localhost/Todo_list', {useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function(){
    console.log("successfully connected");
})