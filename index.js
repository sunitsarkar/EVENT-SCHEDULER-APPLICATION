const express = require("express");
const bodyParser=require("body-parser");
const { urlencoded } = require("body-parser");
const router=require('./route');
const { default: mongoose } = require("mongoose");
const Event=require('./model')

const app = express();

app.use(bodyParser.json());
// app.use(urlencoded({extended:true}));
const uri="mongodb+srv://sunitsarkar:LwP8bgRq3VOKlHWI@cluster0.gxschpx.mongodb.net/?retryWrites=true&w=majority"

mongoose.set('strictQuery',false)
mongoose.connect(uri)




app.use('/POST/v1/events',(req,res)=>{
    const event=new Event(req.body);
    event.save()
    req.event=event;
    res.send(event)
});



app.listen(8000, () => {
    console.log("server is live.....")
})