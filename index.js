const express = require('express');
const app= express();
const path= require('path');
const Port=3000;
const db= require('./config/mongoose');
const Tasks = require('./models/Tasks')

//Middlewares
app.use(express.urlencoded());
app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

// creates Directory for the project
app.use('/',require('./routes'));

app.listen(Port,(err)=>{
    if(err){console.log(`Server error ${err}`);
     return;
}console.log(`port is connected to ${Port}`);
});