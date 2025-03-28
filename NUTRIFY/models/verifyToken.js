const jwt = require("jsonwebtoken")


function verifyToken(req,res,next){
    // console.log(req.headers.authorization)
    if(req.headers.authorization != undefined){
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token,"nutrifyapp",(err,data)=>{
            if(!err){
                next();
            }else{
                res.send({msg:"envalid token"})
            }
        })
    }else{
        res.send({msg:"please login "})
    }

}
module.exports = verifyToken