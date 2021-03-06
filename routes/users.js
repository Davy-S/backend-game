const express = require('express')
const router = express.Router()
const app = express()
const Score = require('../model/playerModel')

router.get('/', (req, res) => {
  let highscoresTable = async () => {
    try {
      await Score.find({}).sort({score: 'desc'}).exec(function(err, docs) {
        res.json(docs)
       });
    }
    catch(e) {
      console.error(`catch ${e}`)
    }
  }
  highscoresTable()
})

module.exports = router
