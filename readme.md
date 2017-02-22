## Gitting started 
```
$ git clone https://github.com/ArcStan3/persons-api.git
$ cd persons-api
$ npm install
$ npm start
```

## Endpoints for Persons
### `GET /persons`
Outputs all persons in the database

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

Allows you to delete people by id 

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

Allows you to update users, requires **current** rev to updatePerson

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

##Endpoints for addresses
