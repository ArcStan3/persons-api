console.log("welcome to the persons api!")
const express = require('express')
const dal = require('./dal.js')
const app = express()

app.get('')

app.get('/persons/:id', function(req, res) {
  dal.getPerson(req.params.id, function (err, resp) {
    if (err) res.send(err)
    res.send(resp)
  })
})

app.listen(9001, function() {
  console.log("I'm listening...")
})
