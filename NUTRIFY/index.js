const mongoose = require("mongoose")
const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const cors = require("cors")
//importing usermodel 
const userModel = require('./models/userModel')

//importing food modle
const foodModel = require('./models/foodModle')

//importing verifyToken
const verifyToken = require('./models/verifyToken')

//importing traking model
const trakingModel = require('./models/trakingModel')

// database connection 
mongoose.connect("mongodb://localhost:27017/nutrify").then(()=>{
    console.log("database connection successfull");
}).catch((err)=>{
    console.log(err)
})
const app = express()
app.use(express.json())
app.use(cors())


app.listen(8000,()=>{
    console.log("server running up")
})


app.post("/register", (req,res)=>{

    let user = req.body;
    bcrypt.genSalt(10,(err,salt)=>{
        if(!err){
            bcrypt.hash(user.password,salt,async (err,h_pass)=>{
                if(!err){
                    user.password= h_pass
                    try{
        
                        let doc = await userModel.create(user)
                        res.status(201).send({msg:"user registered"})
                    }
                    catch(err){
                    
                        res.status(500).send({msg:"some error"})
                    }
                }
            })
        }
    })

})
//login endpoint
app.post("/login",async (req,res)=>{
    let userCred = req.body;
    try{
        const user = await userModel.findOne({email:userCred.email})
        if(user != null){
            bcrypt.compare(userCred.password,user.password,(err,success)=>{
                if(success == true){
                        jwt.sign({email:userCred.email},"nutrifyapp",(err,token)=>{
                            if(!err){
                                res.status(200).send({msg:"login successfull",user:{name:user.name,id:user._id},token:token})

                            }
                        
                        })
                }
                else{
                    res.status(401).send({msg:"Envalid password"})
                    console.log(err)
                }
            })
        }
        else{
            res.status(404).send({msg:"user is not found"})
        }
    }
    catch(err){

        res.send("some error")

    }
})

//fatching all food

app.get("/foods",verifyToken,async(req,res)=>{
    try{
        let foods = await foodModel.find()
        res.send(foods)
    }
    catch(err){
        console.log(err)
        res.send({msg:"food not found"})
    }
})
   

//search by name endpoint
app.get('/food/:name',verifyToken,async (req,res)=>{
        try{
            let food = await foodModel.find({name:{$regex:req.params.name,$options:'i'}})
            // console.log(food.l)
            if(food.length != 0){
                res.send(food)
            }
            else{
                res.send({msg:"not found"})
            }
        }catch(err){
            console.log(err)
        }
})


//traking endpoint

app.post("/track",verifyToken,async (req,res)=>{
    let trackData = req.body
   // console.log(trackData)
    try{
        let data = await trakingModel.create(trackData)
        console.log(data)
        if(data){
            res.send({msg:"food added"})
        }
        else{
            res.send({msg:"food not added"})
        }
        
    }
    catch(err){
        console.log(err)
        res.send({msg:"some error"})

    }
})





//endpoint to fatch all food eaten by a person

app.get("/track/:user_id",verifyToken,async(req,res)=>{

    try{
        let userid = req.params.user_id
        let food = await trakingModel.find({user_id:userid}).populate('user_id').populate('food_id')
        res.send(food)
    }catch(err){
        console.log(err)
    }
})













