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
  res.json(Posts);
};

exports.getPostById = (req,res) =>{
   const postId = parseInt(req.params.id);
    const post = Posts.find(p => p.id === postId );
    
    if(!post) {
      return res.status(404).json({
        message: "Post Not Found"
      });
    }
    res.json(post);
};

exports.updatePost = (req,res) =>{
  const postId = parseInt(req.params.id);
  
  const post = Posts.find(p => p.id === postId);
  
  if(!post){
    return res.status(404).json({
      message:"post Not Found"
    });
  }
    const updatePost = req.body;
    
    post.title = updatePost.title
    post.body = updatePost.body
    post.author = updatePost.author
    res.json({
      message:"updated"
    });
};

exports.deletePost = (req,res) =>{
  const postId = parseInt(req.params.id);
   
     const post = Posts.findIndex(p => p.id === postId);
     
     if(post === -1){
       return res.status(404).json({
         message:"Post Not Found"
       });
     }
     
     Posts.splice(post,1)
     res.json({
       message:"Post Deleted"
     });
};