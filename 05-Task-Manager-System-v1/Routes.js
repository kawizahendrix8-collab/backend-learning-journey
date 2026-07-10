   const express = require("express");
     const router = express.Router();
     
      const {CreateTask,getAllTasks,getTaskById, updateTask,completeTask,deleteTask} = require("./Controller");
      
       router.post("/tasks",CreateTask);
       
       router.get("/tasks",getAllTasks);
       
       router.get("/tasks/:id", getTaskById);
       
       router.put("/tasks/:id", updateTask);
       
       router.put("/tasks/:id/complete", completeTask);
       
       router.delete("/tasks/:id",deleteTask);
       
       module.exports = router;