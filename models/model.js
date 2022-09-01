const mongoose = require('mongoose');

const stringRequired = {
    type: String,
    required: true,
}

const numberRequired = {
    type: Number,
    required: true,
}

const booleanRequired = {
    type: Number,
    required: true,
}

const dataSchema = new mongoose.Schema({
    username: stringRequired,
    password: stringRequired,
    email: stringRequired,
    wallet: stringRequired,
    online: numberRequired,
    mts: numberRequired,
    mtp: numberRequired,
    gun: [
        {
            nft: stringRequired,
            equipped: booleanRequired,
            ammo: numberRequired,
            capacity: numberRequired,
            power: numberRequired,
            range: numberRequired,
            stability: numberRequired,
            rate: numberRequired,
            slot: numberRequired,
            level: numberRequired,
            upgradePoints: numberRequired,
            metalList: [
                {
                    name: stringRequired,
                }
            ],
        }
    ],
    armor: [
        {
            nft: stringRequired,
            equipped: booleanRequired,
            slot: numberRequired,
            level: numberRequired,
            upgradePoints: numberRequired,
            metalList: [
                {
                    name: stringRequired,
                }
            ]
        }
    ],
    splinter: [
        {
            name: stringRequired,
            quantity: numberRequired,
        }
    ],
    metal: [
        {
            name: stringRequired,
            quantity: numberRequired,
        }
    ]
})

module.exports = mongoose.model('users', dataSchema)