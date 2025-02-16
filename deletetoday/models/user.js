const mongoose=require('mongoose')

const Schema=mongoose.Schema

const userSchema=new Schema({
    name:{
        type:'String',
        required:true
    },
    email:{
        type:'String',
        required:true
    },
    feed:{
        posts:[
            {
                postid:{
                    type:Schema.Types.ObjectId,
                    required:true},
            }
        ] 
    }
}
,{timestamps:true}
)

module.exports=mongoose.model('User',userSchema)