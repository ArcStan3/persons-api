const PouchDB = require('pouchdb-http')
const db = new PouchDB('http://localhost:3000/test')
const { map, omit, compose } = require('ramda')

function getPerson (id, cb) {
  db.get(id, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })
}

//todo add template to include
/*
const personToAdd = {
  "_id": "person_james_eady_deliriousarab@gmail.com"
  "firstName": "James",
  "lastName": "Eady",
  "email": "deliriousarab@gmail.com"
}
*/

function addPerson (newPerson, cb) {
  db.put(newPerson, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })
}

function getPersons (cb) {
  db.get(function (err, res) {
    if (err) return cb(err)
    return cb(null, res)
  })
}

/*
console.log(getPerson("person_kevin_porter_kevyp@gmail.com", function (err, res) {
  if (err) console.log (err)
  console.log(res)
}))
*/

const dal = {
  getPerson: getPerson,
  getPersons: getPersons,
  addPerson: addPerson
}

module.exports = dal
