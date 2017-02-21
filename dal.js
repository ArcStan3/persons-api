const PouchDB = require('pouchdb-http')
const db = new PouchDB('http://localhost:3000/test')
const { map, omit, compose } = require('ramda')

function getPerson (id, cb) {
  db.get(id, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })
}

function getPersons (cb) {
  db.
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
}

module.exports = dal
