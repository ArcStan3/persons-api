## Steps
```
$ git clone <some github url>
$ cd persons-api
$ npm install
$ npm start

```

## Endpoints
### `GET /persons/#id`

Provide a description

List of route parameters and definition

Example call:
```
GET /persons/person_kevin_porter_kevyp@gmail.com
```
Example Response:
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

### `POST /persons`

Allows you to add people to couchDB database

Example call:
```
POST /persons
```
Example POST:
```
{
  "_id": "person_tristan_grooms_dmxgrooms@gmail.com",
  "firstName": "Tristan",
  "lastName": "Grooms",
  "email": "dmxgroom@gmail.com"
}
```
Example Response:
```
{
  "ok": true,
  "id": "person_tristan_grooms_dmxgrooms@gmail.com",
  "rev": "1-7e2681579221cf88dd6b4625ebad8604"
}
