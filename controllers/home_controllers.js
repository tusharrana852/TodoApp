const Tasks = require('../models/Tasks')

//uses ejs for views.
module.exports.home=function(req,res){
    const obj= Tasks.find({},(err,result)=>{
        if(err){console.log(err)
        return;}
        return res.render('home',{title:"Todo List",Todo_list: result});
    });
}

// create a new document in the database using O.D.M mongoose
module.exports.addTask= function(req,res){
    Tasks.create({
        Description:req.body.Description,
        Date:req.body.Date,
        categories: req.body.categories
    },(err, newTasks)=>{
        if(err){console.log('error while creating a document'+err);
        return;}
      return  res.redirect('/')
    })
}

// Deleting the task from database.
module.exports.deleteTasks= function(req,res){
    Tasks.deleteOne({Date: req.params.id},(err, value)=>{
        if(err){console.log('error in deleting a document from database'+err);
        return;}
        res.redirect('/');
    });
}