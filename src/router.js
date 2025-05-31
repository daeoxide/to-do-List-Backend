const express = require('express');
const router = express.Router();

const tasksController = require ('./controllers/tasksController')
const tasksMiddleware =  require('./middlewares/tasksMiddleware');

router.get("/tasks", 
     tasksController.getAll); //busca as tasks
router.post("/tasks", 
     tasksMiddleware.validateFieldTitle, //primeiro valida o corpo, depois segue criando a task
     tasksController.createTask); 
router.delete("/tasks/:id", 
     tasksController.deleteTask); //exlcui a task
router.put("/tasks/:id",
     tasksMiddleware.validateFieldTitle, //valida se tem um titulo
     tasksMiddleware.validateFieldStatus,  // valida se tem um status
     tasksController.updateTask); //atualiza a task

module.exports = router;