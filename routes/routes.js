const express = require('express');
const router = express.Router();
const Model = require('../models/model');
module.exports = router;

//Get All Users
router.get('/getAllUsersApi', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data)
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
        res.json(data)
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
        const updatedData = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            wallet: req.body.wallet,
            online: req.body.online,
            mts: req.body.mts,
            mtp: req.body.mtp,
            $addToSet: {
                gun: req.body.gun
            },
            $addToSet: {
                armor: req.body.armor
            },
            $addToSet: { 
                splinter: req.body.splinter
            },
            $addToSet: {
                metal: req.body.metal
            }
        }
        const options = { new: true, runValidators: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
        )
        res.send(result)
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
            MTS: req.body.mts,
            MTT: req.body.mtt,
            splinter: req.body.splinter,
            guide: req.body.guide
        }
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, userData, options
        )
        res.send(result)
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
        res.send(`Document with ${data.username} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})