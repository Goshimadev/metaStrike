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
    const data = new Model({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        wallet: req.body.wallet,
        guide: req.body.guide,
        MTS: req.body.mts,
        MTT: req.body.mtt,
        splinter: req.body.splinter,
        long_gun: req.body.long_gun,
        pistol: req.body.pistol,
        knife: req.body.knife,
        gernade: req.body.gernade
    })
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
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            wallet: req.body.wallet,
            guide: req.body.guide,
            MTS: req.body.mts,
            MTT: req.body.mtt,
            splinter: req.body.splinter,
            $addToSet: {
                long_gun: req.body.long_gun
            },
            $addToSet: {
                pistol: req.body.pistol
            },
            $addToSet: {
                knife: req.body.knife
            },
            $addToSet: {
                gernade: req.body.gernade
            }
        }
        const options = { new: true };
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
        const updatedData = {
            MTS: req.body.mts,
            MTT: req.body.mtt,
            splinter: req.body.splinter,
            guide: req.body.guide
        }
        const options = { new: true };
        const result = await Model.findByIdAndUpdate(
            id, updatedData, options
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
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})