const express = require('express');
const router = express.Router();
const Model = require('../models/model');
module.exports = router;

//Get All Users
router.get('/getAllUsersApi', async (req, res) => {
    try{
        const data = await Model.find();
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get Single Users
router.get('/getUserApi/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Model.findById(id);
        res.status(200).json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get Single Users with Username
router.get('/getUserByNameApi/:username', async (req, res) => {
    try{
        const username = req.params.username;
        const data = await Model.find({username: {$regex : '^'+username+'$', $options : 'i'} })
        data.length > 0 
        ? res.status(200).json(data)
        : res.status(404).json({message: `User with name \'${username}\' not found.`})
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

// RegisterAPI/Sign Up
router.post('/registerAPI', async (req, res) => {
    const data = new Model( req.body )
    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Update User by ID Method
router.patch('/updateUserApi/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true, runValidators: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.status(200).send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//SetUserApi Method
router.patch('/setUserApi/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const userData = {
            mts: req.body.mts,
            mtp: req.body.mtp,
            splinter: req.body.splinter,
        }
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, userData, options
        )
        res.status(200).send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with username \'${data.username}\' has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})