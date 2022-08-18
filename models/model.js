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
    long_gun: [
        {
            title: {
                type: String,
                required : true,
            },
            nft: {
                type: String,
                required : true,
            },
            lock: {
                type: Boolean,
                required : true,
            }
        }
    ],
    pistol: [
        {
            title: {
                type: String,
                required : true,
            },
            nft: {
                type: String,
                required : true,
            },
            lock: {
                type: Boolean,
                required : true,
            }
        }
    ],
    knife: [
        {
            title: {
                type: String,
                required : true,
            },
            nft: {
                type: String,
                required : true,
            },
            lock: {
                type: Boolean,
                required : true,
            }
        }
    ],
    gernade: [
        {
            title: {
                type: String,
                required : true,
            },
            nft: {
                type: String,
                required : true,
            },
            lock: {
                type: Boolean,
                required : true,
            }
        }
    ]
})

module.exports = mongoose.model('users', dataSchema)