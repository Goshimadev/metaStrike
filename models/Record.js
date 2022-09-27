const mongoose = require('mongoose');

const stringRequired = {
    type: String,
    required: true,
}

const numberRequired = {
    type: Number,
    required: true,
}

const dataSchema = new mongoose.Schema({
    matchPlayed: numberRequired,
    timePlayed: numberRequired,
    totalWin: numberRequired,
    totalDeath: numberRequired,
    rankPoint: numberRequired,
    dailyMatchPlayed: numberRequired,
    rankTitle: stringRequired,
    initTime: stringRequired,
    friends: [stringRequired]
})

module.exports = mongoose.model('record', dataSchema)