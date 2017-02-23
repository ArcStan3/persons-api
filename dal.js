const PouchDB = require('pouchdb-http')
const db = new PouchDB('http://localhost:3000/test')
const { map, omit, compose, prop } = require('ramda')

//Persons
function getPersons (cb) {
  db.allDocs({ include_docs: true,
        start_key: "person_",
        end_key: "person_\uffff"}, function (err, res) {
    if (err) return cb(err)
    cb(null, map(x => x.doc, res.rows))
  })
}

function getPerson (id, cb) {
  db.get(id, function (err, res) {
    if (err) return cb(err)
    //no need to return below, return is implicit
    cb(null, res)
  })
}

function addPerson (person, cb) {
  if (prop('firstName', person) && prop('lastName', person) && prop('email', person)) {
  person._id = `person_${person.firstName.toLowerCase()}_${person.lastName.toLowerCase()}_${person.email.toLowerCase()}`
  person.type = "person"
  db.put(person, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })} else {return cb({"error": "please enter a firstName, lastName, and email"})}
} 


function updatePerson (person, cb) {
  person.type = "person"
  db.put(person, function (err, res) {
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

//Addresses
function addPerson (person, cb) {
  if (prop('firstName', person) && prop('lastName', person) && prop('email', person)) {
  person._id = `person_${person.firstName.toLowerCase()}_${person.lastName.toLowerCase()}_${person.email.toLowerCase()}`
  person.type = "person"
  db.put(person, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })} else {return cb({"error": "please enter a firstName, lastName, and email"})}
} 


function addAddress (address, cb) {
  db.put(address, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })
}

const anAddress = {
  "_id": "address_lars_hellberger_l.hellberger@gmail.com_143_lancer_dr",
  "person_id": "person_lars_hellberger_l.hellberger@gmail.com",
  "type": "address",
  "address_type": "home",
  "street": "143 Lancer Dr",
  "city": "Summerville",
  "state": "SC",
  "zip": "29485"
}

addAddress(anAddress, function (err, res) {
  if (err) return console.log (err)
  console.log(res)
})
  

const dal = {
  getPerson: getPerson,
  addPerson: addPerson,
  deletePerson: deletePerson,
  updatePerson: updatePerson,
  getPersons: getPersons,
  addAddress: addAddress
}

module.exports = dal
