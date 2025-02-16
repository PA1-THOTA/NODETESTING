const {validationResult}=require('express-validator')

const Post=require('../models/post')

const mongoose=require('mongoose')

// const Post=require('../models/post')

exports.getPosts=(req,res,next)=>{
    Post.find().then((posts)=>{
        res.json({
            posts
        })
    }).catch(err=>console.log(err))
    
}

exports.createPost=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            message:"chusi kottu bey",
            errors:errors.array()
        })
    }
    
    const title=req.body.title;
    const content=req.body.content
    const post=new Post({
        title:title,
        content:content
    })
    post.save().then(a=>
        {res.status(201).json({
            message:"post created by vattaa",
            post:{
                id:new Date().getTime().toString(),
                title:title,
                content:content
            }
        })}
    ).catch(err=>console.log(err))
}

exports.getPostById=(req,res,next)=>{
    Post.findById(req.body._id)
    .then(result=>{
        console.log(req.body._id)
        res.status(200).json({
            postById:result
        })
    })
    .catch(err=>console.log(err))
}

exports.editPostById=(req,res,next)=>{
    Post.findById(req.body._id)
    .then(Post=>{
        if(Post){
        Post.title=req.body.title
        Post.content=req.body.content
        Post.save()
            .then(result=>{
                    console.log(req.body._id)
                    res.status(200).json({
                    updated:result
                })
            })
            .catch(err=>console.log(err))    
        }else{
            console.log(Post)
            res.json({
                data:"not found"
            })
        }
    })
    .catch(err=>console.log(err))
}

exports.deleteById=(req,res,next)=>{
    Post.findByIdAndDelete(req.body._id)
    .then(result=>
        res.json({
            result:result,
            deleted:true
        }))
    .catch(err=>console.log(err))
}