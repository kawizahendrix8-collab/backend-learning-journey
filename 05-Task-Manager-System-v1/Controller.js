   let tasks = require("./Data/Tasks");
    
    exports.CreateTask = (req, res) => {
       const newTask ={
        id:tasks.length + 1,
        
        title: req.body.title,
        
        completed:false,
        
        createdAt: new Date()
        
       };
       
       tasks.push(newTask);
         
         res.status(201).json({message:"new Task created"});
       
    };
    
    
    exports.getAllTasks = (req,res) => {
        
        res.json(tasks);
    };
    
    
    exports.getTaskById = (req,res) => {
       const taskId = Number(req.params.id);
      
     const task = tasks.find(t => t.id === taskId);
      
        if(!task) {
          return res.status(404).json({message:"task not found"});
        }
        res.json(task);
    };
    
    
    exports.updateTask = (req,res) => {
       
       const taskId = parseInt(rea.params.id);
       
         const task = tasks.find(t => t.id === taskId);
          
          if(!task) {
            return res.status(404).json({
              message:" task not Found"
            });
}
         const updateData = req.body;
         
         task.title = updateData.title;
         res.json({
           message:"title Updated"
         });
    };
    
    exports.completeTask = (req,res) =>{
      
    };
    
    exports.deleteTask = (req, res) =>{
      const taskId = parseInt(req.params.id);
      
      const task = tasks.findIndex(t => t.id === taskId);
         
         if(!task){
           return res.status(404).json({message:" task not found"});
         }
         
         tasks.splice(task,1);
           
           rea.json({
             message:"task deleted"
           });
         
         
    };