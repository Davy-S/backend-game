const express = require('express')
const router = express.Router()
const Score = require('../model/playerModel')


router.post('/', (req, res) => {
  let data = req.body
  let resData = {}

  const getData = async (data) => {
    try {
      resData.pseudoDispo = false
      await Score.find({pseudo: data.pseudo}, (err, docs) => {
        if(!docs.length) {
          data.date = new Date(Date.now()).toLocaleString()
          resData.pseudoDispo = true
        }
        if(docs.length){
          resData.pseudoDispo = false
        }
        })
      if(resData.pseudoDispo) {
        resData.pseudo = data.pseudo
        let score = new Score(data)
        resData.pseudoDispo = true

        //await score.save()
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
