let Posts = require("./Data/Posts");

exports.createPost = (req,res) => {
  const newPost = {
    id: Posts.length + 1,
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    createdAt: new Date()
  };
  
  Posts.push(newPost);
  
  res.json({ 
    message: "Post Created: " + newPost.title 
  });
};

exports.getAllPosts = (req,res) =>{
  req.json(Posts);
};

exports.getTaskById = (req,res) =>{
   const postId = parseInt(req.params.id);
    const post = Posts.find(p => p.id === postId );
    
    if(!post) {
      return res.status(404).json({
        message: "Post Not Found"
      });
    }
    res.json(Post);
};

exports.updatePost = (req,res) =>{
  const postId = parseInt(teq.params.id);
  
  const post = Posts.find(p => p.id === postId);
  
  if(!post){
    return res.status(404).json({
      message:"post Not Found"
    });
  }
};