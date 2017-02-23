## Gitting started 
```
$ git clone https://github.com/ArcStan3/persons-api.git
$ cd persons-api
$ npm install
$ npm start
```

## Endpoints for Persons
### `GET /persons`
Returns all persons in the database

Example call:
```
GET /persons
```

### `GET /persons/#id`
Allows you to access a person by their id 

Example call:
```
GET /persons/person_kevin_porter_kevyp@gmail.com
```
Example response:
```
{
  "_id": "person_kevin_porter_kevyp@gmail.com",
  "_rev": "2-bf214bcc28688aad089aa86e622de7c2",
  "firstName": "Kevin",
  "lastName": "Porter",
  "email": "kevyp@gmail.com",
  "type": "person"
} 
```
Example error:
```
{
  "name": "not_found",
  "status": 404,
  "message": "missing",
  "reason": "missing",
  "error": "not_found"
}
```

### `POST /persons`
Allows you to add a person

Example call:
```
POST /persons
```
Example POST:
```
{
  "firstName": "Tristan",
  "lastName": "Grooms",
  "email": "dmxgroom@gmail.com"
}
```
Example response:
```
{
  "ok": true,
  "id": "person_tristan_grooms_dmxgroom@gmail.com",
  "rev": "1-7e2681579221cf88dd6b4625ebad8604"
}
```
Example of POST in database (id and type are added, as well as rev):
```
{
  "_id": "person_tristan_grooms_dmxgroom@gmail.com",
  "_rev": "1-c1340ca706a2c71576a89cbda22dfdfc",
  "firstName": "Tristan",
  "lastName": "Grooms",
  "email": "dmxgroom@gmail.com",
  "type": "person"
}
```
Example error (if POST does not contain either firstName, lastName, or email):
```
{
  "name": "HTTPError",
  "status": 500,
  "message": "",
  "error": "please enter a firstName, lastName, and email"
}
```

### `DELETE /persons/:id`
Remove a person by id 

Example call:
```
DELETE /persons/person_kevin_porter_kevyp@gmail.com
```
Example response:
```
{
  "ok": true,
  "id": "person_stanley_cruse_s.cruse@gmail.com",
  "rev": "4-7539397ec3e96842298de04658a6d757"
}
```
Example error (if ':id' doesn't match database): 
```
{
  "name": "not_found",
  "status": 404,
  "message": "missing",
  "reason": "missing",
  "error": "not_found"
}
```

### `PUT /persons/:id`
Allows you to update users, requires **current** rev to update person

Example call:
```
PUT  /persons/person_george_apostolov_g.aposto@gmail.com
```
Example PUT: 
```
{
  "_id": "person_george_apostolov_g.aposto@gmail.com",
  "_rev": "2-521eccef9a3261cbbdb0df4751c8b5a7",
  "firstName": "George",
  "lastName": "Apostolov",
  "email": "g.aposto@gmail.com",
}
```
Example response:
```
{
  "ok": true,
  "id": "person_george_apostolov_g.aposto@gmail.com",
  "rev": "3-4a04c41fdb016cbcb3f5e888ade0cd21"
}
```
Example error (if **rev** is not supplied):
```
{
  "name": "conflict",
  "status": 409,
  "message": "Document update conflict.",
  "reason": "Document update conflict.",
  "error": "conflict"
}
```

##Endpoints for Addresses
### `GET /addresses`
Returns all addresses in the database

Example call: 
```
`GET /addresses`
```

### `GET /addresses/:id`
Returns specific address in the database

Example call: 
```
`GET  /addresses/address_kent_berry_ohwow@gmail.com_543_boomkin_dr`
```
Example response: 
```
{
  "_id": "address_kent_berry_ohwow@gmail.com_543_boomkin_dr",
  "_rev": "2-354b7f4206a455d5d35969af4eea98ce",
  "person_id": "person_lars_hellberger_l.hellberger@gmail.com",
  "type": "address",
  "address_type": "home",
  "street": "543 boomkin Dr",
  "city": "Atlanta",
  "state": "GA",
  "zip": "30301"
}
```

### `POST /addresses`\
Allows you to add an address to the database

Example call: 
```
{
  "_id": "address_lars_hellberger_l.hellberger@gmail.com_143_lancer_dr",
  "person_id": "person_lars_hellberger_l.hellberger@gmail.com",
  "address_type": "home",
  "street": "143 Lancer Dr",
  "city": "Summerville",
  "state": "SC",
  "zip": "29485"
}
```
Example response: 
```
{
  "ok": true,
  "id": "address_lars_hellberger_l.hellberger@gmail.com_143_lancer_dr",
  "rev": "1-5bccfd5a54079f1f6502a7147c5d1404"
}
```

### `PUT /addresses/:id`
Allows you to update a user's address, requires **current** rev to update address

Example call:
```
`PUT /addresses/address_kent_berry_ohwow@gmail.com_543_boomkin_dr`
```
Example PUT (changed zip from "30301" to "30305"): 
```
{
  "_id": "address_kent_berry_ohwow@gmail.com_543_boomkin_dr",
  "_rev": "2-354b7f4206a455d5d35969af4eea98ce",
  "person_id": "person_lars_hellberger_l.hellberger@gmail.com",
  "type": "address",
  "address_type": "home",
  "street": "543 boomkin Dr",
  "city": "Atlanta",
  "state": "GA",
  "zip": "30305"
}
```
Example response: 
```
{
  "ok": true,
  "id": "address_kent_berry_ohwow@gmail.com_543_boomkin_dr",
  "rev": "3-4deba997bbca864143714103fcb17c1e"
}
```
### `DELETE /addresses/:id`
Remove an address from the database 

Example call: 
```
DELETE /addresses/address_stanley_cruse_s.cruse@gmail.com_218_germander_ave
```
Example response:
```
{
  "ok": true,
  "id": "address_stanley_cruse_s.cruse@gmail.com_218_germander_ave",
  "rev": "8-de97997899d1265672ce8a393d1230c9"
}
```
