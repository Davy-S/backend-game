const mongoose = require('mongoose')

const ScoreSchema = mongoose.Schema({
  pseudo: {type: String, unique: true, required: true },
  score: {type: Number, default: 0 },
  date: {type: String }
})

module.exports = mongoose.model('Score', ScoreSchema)
