const express= require('express');
const router = express.Router();
router.use(express.urlencoded());


const homeController = require('../controllers/home_controllers');

router.get('/',homeController.home);
router.post('/create-task',homeController.addTask);
router.get('/delete-task/:id',homeController.deleteTasks);

module.exports=router;
