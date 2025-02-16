const bodyParser = require('body-parser')

const express=require('express')

const mongoose=require('mongoose')

const router=require('./routes/feed')

const User=require('./models/user')

const app=express()

const port=process.env.PORT || 8080

app.use(bodyParser.json())

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,PATCH')
    res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
    next()
})

app.use('/feed',router)

mongoose.connect('mongodb+srv://pavan:pavan@cluster0.8ixmj.mongodb.net/feed?retryWrites=true&w=majority&appName=Cluster0')
.then(result=>{
    User.findOne().then(user=>{
        if(!user){
            const user=new User({
                name:'pavan',
                email:'pavankumarthota123455678@gmail.com',
                feed:{
                    posts:[]
                }
            })
            user.save()
        }
    })
    
    app.listen(port) 
})
.catch(err=>console.log(err))