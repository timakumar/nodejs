const express = require('express')
const app = express()
const path = require('path');
const port = process.env.PORT || 3000
const db = require('./db')
require('dotenv').config()
// const Menu=require('./models/Menu')
const bodyParser = require('body-parser')


//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())


//importing router files
const personRouter=require('./routes/personRoute')
app.use('/person',personRouter)

//router files
const menuRouter=require('./routes/menuRoute')
app.use('/menu',menuRouter)





// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'form.html'));
// })

app.get('/', (req, res) => {
    res.send('wlecome ');
})



// app.delete('/delete',async(req,res)=>{
//     try {
//         const datadelete=await Menu.deleteOne()
//         res.status(200).json(datadelete)
        
//     } catch (error) {
        
//     }
// })






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})