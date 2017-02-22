const PouchDB = require('pouchdb-http')
const db = new PouchDB('http://localhost:3000/test')
const { map, omit, compose } = require('ramda')

function getPerson (id, cb) {
  db.get(id, function (err, res) {
    if (err) return cb(err)
    //no need to return below, return is implicit
    cb(null, res)
  })
}

function addPerson (person, cb) {
  db.put(person, function (err, res) {
    if (err) return cb(err)
    //no need to return below, return is implicit
    cb(null, res)
  })
}

function updatePerson (doc, cb) {
  db.put(doc, function (err, res) {
    if (err) return cb(err)
    //no need to return below, return is implicit
    cb(null, res)
  })
}

function deletePerson (id, cb) {
  db.get(id, function (err, doc) {
    if (err) return cb(err)
    db.remove(doc, function (err, removedDoc) {
    if (err) return cb(null, err)
    cb(null, removedDoc)
  })
})
}

const dal = {
  getPerson: getPerson,
  addPerson: addPerson,
  deletePerson: deletePerson,
  updatePerson: updatePerson
}

module.exports = dal
