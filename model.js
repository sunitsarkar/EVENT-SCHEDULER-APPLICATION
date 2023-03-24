const mongoose=require("mongoose");

let event=mongoose.Schema({
    title:String,
    description:String,
    location:String,
    starttime:String,
    endtime:String
})

module.exports=mongoose.model("Event",event);