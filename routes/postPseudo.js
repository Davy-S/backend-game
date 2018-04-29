const express = require('express')
const router = express.Router()
const Score = require('../model/playerModel')


router.post('/', (req, res) => {
  let data = req.body
  let resData = {}

  const getData = async (data) => {
    try {
      await Score.find({pseudo: data.pseudo}, (err, docs) => {
        if(!docs.length) {
          data.date = new Date(Date.now()).toLocaleString()
          resData.pseudoDispo = true
        }
        else resData.pseudoDispo = false
        })
      if(resData.pseudoDispo) {
        resData.pseudo = data.pseudo
        let score = new Score(data)
        await score.save()
      }
      res.json(resData)
    }
    catch(e) {
      console.error('catch error', e)
    }
  }

  getData(data)

})

module.exports = router
