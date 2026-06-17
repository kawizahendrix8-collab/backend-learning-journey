

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



exports.login = (req, res) => {

  const { email, password } = req.body;

  const user = users.find(u => u.email === email);

  if (!user) {
    return res.status(404).json({
      message: "User not found"
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      message: "Incorrect password"
    });
  }

  res.json({
    message: "Login successful",
    user
  });

};