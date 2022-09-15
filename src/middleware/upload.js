const multer = require('multer');

const storage = multer.diskStorage({
     destination:function(req,file,cb){
          cb(null,"");
     },
     filename:function(req,file,cb){
          const ext = file.originalname.split('.').pop();
          const filename = `file-${Date.now()}.${ext}`;
          cb(null,filename)

     }
})

module.exports= multer({storage});