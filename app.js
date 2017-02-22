console.log("welcome to the persons api!")
const express = require('express')
const dal = require('./dal.js')
const port = process.env.PORT || 9001
const app = express()
const bodyParser = require('body-parser')
const HTTPError = require('node-http-error')

app.use(bodyParser.json())


app.post('/persons', function (req, res, next) {
  console.log(req.body)
  dal.addPerson(req.body, function (err, dalResponse) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    res.send(dalResponse)
  })
})

app.put('/persons/:id', function (req, res, next) {
  console.log(req.body)
  dal.updatePerson(req.body, function (err, dalResponse) {
    if (err) return next(new HTTPError(err.status, err.messge, err))
    res.send(dalResponse)
  })
})

app.delete('/persons/:id', function (req, res, next) {
  dal.deletePerson(req.params.id, function (err, person) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    res.send(person)
  })
})

app.get('/persons/:id', function (req, res, next) {
  dal.getPerson(req.params.id, function (err, person) {
    if (err) return next(new HTTPError(err.status, err.message, err))
    res.send(person)
  })
})

app.listen(port, function() {
  console.log("I'm listening on port: ", port)
})

app.use(function (err, req, res, next) {
  console.log(req.method, " ", req.path, " err: ", err)
  res.status(err.status || 500)
  res.send(err)
})
