 const urls = require ("./Data/Urls");
 
   exports.shortCode = (req,res) => {
     
     const Url= req.body.url;
     
       const shortCode = Math.random().toString(36).substring(2, 7);
         
       const newUrl = {
         id: urls.length + 1,
         originalUrl : Url,
         shortCode : shortCode
       };
       
       urls.push(newUrl);
         
         res.json({
     message: "URL shortened",
     shortUrl: "http://localhost:3000/" + shortCode
     
  });
};


   exports.redirectToUrl = (req,res) =>{
     const shortCode = req.params.shortCode;
       const found = urls.find(u => u.shortCode === shortCode);
       
        if(!found) {
          return res. status(404).json({message: "Url not found"});
        }
        res.redirect(found.originalUrl);
   };