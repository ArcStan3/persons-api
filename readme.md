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
Example Response:
```
{
  "_id": "person_james_eady_deliriousarab@gmail.com",
  "_rev": "1-6ff7731dfbed6011c952c84add0bccbf",
  "firstName": "James",
  "lastName": "Eady",
  "email": "deliriousarab@gmail.com"
}
