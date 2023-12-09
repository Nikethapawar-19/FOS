let express = require("express")
let app=express();
const { default: mongoose } = require("mongoose");
const myinfo = require("./server/models/MyInfoModel");
const dotenv = require("dotenv")
dotenv.config();
let bodyParser = require('body-parser');

let DB_URL =mongoose.connect(process.env.DB_URL)

app.get('/',function(req,res){
    res.send("hello niketha")
})

app.post('/',function(req,res){
    try {
        let body = req.body;
        console.log(body)
        let create_data = new myinfo(body)
        
        create_data.save();
        return res.status(200).json({myinfo:create_data})
          
    } catch (error) {
        return res.status(500).json({error:"unknown error",error_code:"unknown_error"})
    }
    

}) // 8888888888888//

app.listen('7000',function(){
    console.log('listening to port 7000')
})
module.exports = app