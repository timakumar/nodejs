const express = require('express')
const Person = require('../models/Person')
const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const getDatas = await Person.find()
        console.log('get data successfully')
        res.status(200).json(getDatas)


    } catch (error) {
        res.status(500).json({ error: 'Internal server errror' })

    }
})
router.post('/', async (req, res) => {
    try {
        const data = req.body
        const newPerson = new Person(data)
        const response = await newPerson.save()
        console.log('data saved successfully')
        res.status(200).json(response)
        // res.sendFile(path.join(__dirname, 'form.html'));


    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })

    }
})

router.put('/:id',async (req, res) => {
    try {
        const personId = req.params.id
        const updatedData = req.body
        const response=await Person.findByIdAndUpdate(personId,updatedData,{
            new:true,
            runValidators:true
        })
        res.status(200).json({success:"successfully updated"})

    } catch (error) {

    }

})

module.exports = router