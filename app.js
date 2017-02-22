console.log("welcome to the persons api!")
const express = require('express')
const dal = require('./dal.js')
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.get('/persons', function (req, res) {
  dal.getPersons(function (err, resp) {
    if (err) res.send(err)
    res.send(resp)
  })
})

app.post('/persons', function (req, res) {
  //test to see if we have hooked up our bodyparser correctly
  console.log(req.body)
  dal.addPerson(req.body, function (err, resp) {
    if (err) res.send(err)
    res.send(resp)
  })
})

app.get('/persons/:id', function (req, res) {
  dal.getPerson(req.params.id, function (err, resp) {
    if (err) res.send(err)
    res.send(resp)
  })
})

app.listen(9001, function() {
  console.log("I'm listening...")
})
