const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    username: {
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
    online: {
        required: true,
        type: Number
    },
    mts: {
        required: true,
        type: Number
    },
    mtp: {
        required: true,
        type: Number
    },
    gun: [
        {
            nft: {
                type: String,
                required : true,
            },
            equipped: {
                type: Boolean,
                required : true,
            },
            ammo: {
                type: Number,
                required : true,
            },
            capacity: {
                type: Number,
                required : true,
            },
            power: {
                type: Number,
                required : true,
            },
            range: {
                type: Number,
                required : true,
            },
            stability: {
                type: Number,
                required : true,
            },
            rate: {
                type: Number,
                required : true,
            },
            slot: {
                type: Number,
                required : true,
            },
            level: {
                type: Number,
                required : true,
            },
            upgradePoints: {
                type: Number,
                required : true,
            },
            metalList: [
                {
                    name: {
                        type: String,
                        required : true,
                    }
                }
            ],
        }
    ],
    armor: [
        {
            nft: {
                type: String,
                required : true,
            },
            equipped: {
                type: Boolean,
                required : true,
            },
            slot: {
                type: Number,
                required : true,
            },
            level: {
                type: Number,
                required : true,
            },
            upgradePoints: {
                type: Number,
                required : true,
            },
            metalList: [
                {
                    name: {
                        type: String,
                        required : true,
                    }
                }
            ]
        }
    ],
    splinter: [
        {
            name: {
                type: String,
                required : true,
            },
            quantity: {
                type: Number,
                required : true,
            },
        }
    ],
    metal: [
        {
            name: {
                type: String,
                required : true,
            },
            quantity: {
                type: Number,
                required : true,
            },
        }
    ]
})

module.exports = mongoose.model('users', dataSchema)