const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.MONGO_ONLINE)

const db=mongoose.connection

db.on('connected',()=>{
    console.log('connected to mongodb server')
})

db.on('error',()=>{
    console.log('mongodb connection error')
})
db.on('disconnected',()=>{
    console.log('disconnected to mongodb server')
})


module.exports=db