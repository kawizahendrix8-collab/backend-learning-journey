

const users = require("./data/users"); 

exports.signUp = (req, res) => {
  const newUser = {  
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  };
  
  users.push(newUser); 
  
  res.json({
    message: "Account Created by " + newUser.name 
  });
};