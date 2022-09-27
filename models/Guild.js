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
    name: stringRequired,
    mts: numberRequired,
    deposit: numberRequired,
    withdraw: numberRequired,
    matchPlayes: numberRequired,
    totalWins: numberRequired,
    member: [stringRequired]
})

module.exports = mongoose.model('guild', dataSchema)