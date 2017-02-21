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

### `GET /persons`
