const mongoose=require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/UserData")

.then(()=>{
    console.log('mongoose connected');
})
.catch((e)=>{
    console.log('failed');
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }

})





// const donation =new mongoose.model('Collection2',LogInSchema)

// module.exports= donation



const collection =new mongoose.model('Collection1',logInSchema)

module.exports= collection