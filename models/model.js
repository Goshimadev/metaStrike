const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    wallet: {
        required: true,
        type: String
    },
    guide: {
        required: true,
        type: String
    },
    MTS: {
        required: true,
        type: Number
    },
    MTT: {
        required: true,
        type: Number
    },
    splinter: {
        required: true,
        type: Number
    },
    long_gun: {
        required: true,
        type: Array
    },
    pistol: {
        required: true,
        type: Array
    },
    knife: {
        required: true,
        type: Array
    },
    gernade: {
        required: true,
        type: Array
    }
})

module.exports = mongoose.model('users', dataSchema)