const PouchDB = require('pouchdb-http')
const db = new PouchDB('http://localhost:3000/test')
const { map, omit, compose, prop } = require('ramda')



////////////////Persons//////////////////////

function getPersons (cb) {
  db.allDocs({ include_docs: true,
        start_key: "person_",
        end_key: "person_\uffff"}, function (err, res) {
    if (err) return cb(err)
    cb(null, (map(obj => omit("type", obj.doc), res.rows)))
  })
}


function getPerson (id, cb) {
  db.get(id, function (err, res) {
    if (err) return cb(err)
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
    if (err) return cb(err)
    cb(null, removedDoc)
  })
})
}








/////////////////Addresses/////////////////////

function getAddresses (cb) {
  db.allDocs({ include_docs: true, 
        start_key: "address_",
        end_key: "address_\uffff"}, function (err, res) {
    if (err) return (err)
    cb(null, (map(obj => omit("type", obj.doc), res.rows)))
  })
}


function addAddress (address, cb) {
  address.type = "address"
  db.put(address, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })
}


function getAddress (id, cb) {
  db.get(id, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })
}


function updateAddress (address, cb) {
  if (prop('_rev', address)) {
  db.put(address, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })} else {return cb({"error": "please enter the current '_rev' for the address you wish to update"})}
}


function deleteAddress (address, cb) {
  db.get(address, function (err, res) {
    if (err) return cb(err) 
    db.remove(res, function (err, removedAddress) {
    if (err) return cb(err)
    cb(null, removedAddress)
  })
})
}




const dal = {
  getPerson: getPerson,
  addPerson: addPerson,
  deletePerson: deletePerson,
  updatePerson: updatePerson,
  getPersons: getPersons,
  addAddress: addAddress,
  getAddresses: getAddresses,
  getAddress: getAddress,
  updateAddress: updateAddress,
  deleteAddress: deleteAddress
}

module.exports = dal
