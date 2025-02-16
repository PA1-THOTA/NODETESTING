const express=require('express')

const {body}=require('express-validator')

const router=express.Router()

const feedController=require('../controllers/feed')

router.get('/posts',feedController.getPosts)

router.post('/postById',feedController.getPostById)

router.post('/editpostById',feedController.editPostById)

router.post('/deletepostById',feedController.deleteById)

router.post('/post',[
    body('title').trim().isLength({min:5}),
    body('content').trim().isLength({min:5})
],feedController.createPost)

module.exports=router