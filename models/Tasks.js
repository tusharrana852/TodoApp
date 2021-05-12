const mongoose= require('mongoose');

// creating Schema
const ContactSchmea= new mongoose.Schema({
    Description:{
    type: String,
    require:true
},
    Date:{
        type:String,
        require:true
    },
    categories:{
        type:String,
        require:true
    }
});

//creating collection in the database
const Tasks= mongoose.model('Tasks',ContactSchmea);

module.exports= Tasks;
