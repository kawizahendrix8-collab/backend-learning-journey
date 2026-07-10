   const tasks = require("./Data/tasks");
    
    exports.createTasks = (req, res) => {
       const newTask ={
        id:tasks.length + 1,
        
        title: req.body.title,
        
        createdAt: new Date()
        
       };
       
       tasks.push(newTask);
         
         res.status(201).json({message:"new Task created"});
       
    };
    
    exports.getAllTasks = (req,res) => {
        
        res.json(tasks);
    };
    
    