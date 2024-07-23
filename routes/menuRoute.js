const express = require('express')
const Menu=require('../models/Menu')
const router = express.Router()

router.post('/',async(req,res)=>{
    try {
        const menudata=req.body
        const newMenu=new Menu(menudata)
        const finaldata=await newMenu.save()
        console.log('Menu created')
        res.status(200).json(finaldata)
    } catch (error) {
        res.status(500).json('Internal server Error')
        
    }
   
})

router.patch('/',async(req,res)=>{
    
    try {
        const data=await Menu.updateOne({name:'chowmin'},{$set:{taste:'spicy'}})
        res.status(200).json(data)
        
    } catch (error) {
        
    }
})

module.exports=router