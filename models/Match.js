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
    matchTime: numberRequired,
    teamA: [stringRequired],
    teamB: [stringRequired],
    teamAKill: [numberRequired],
    teamBKill: [numberRequired],
    teamADeath: [numberRequired],
    teamBDeath: [numberRequired],
    ranking: [stringRequired],
    winner: booleanRequired,
    matchType: stringRequired,
    matchMap: stringRequired,
    initTime: stringRequired
})

module.exports = mongoose.model('match', dataSchema)