const mongoose=require("mongoose")
const Schema=mongoose.Schema;

const event_details=new Schema({
    title:{
        type:String,required:true
    },
    description:{
        type:String,required:true
    },
    location:{
        type:String,required:true
    },
    startTime:Date,
    endTime:Date
})

const Details=mongoose.model("events",event_details);
module.exports=Details;