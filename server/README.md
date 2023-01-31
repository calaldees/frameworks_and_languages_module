Server
======

#### Usage
To run the server you would need the following commands

First make sure you are in the right directory
``` powershell
cd server
```
Hence we are using container we build and run the server as follow:
``` powershell
make build
```
``` powershell
make run
```
As this is only a server side and does not have a user interface, we communicate with the server using the following curl commands to post, get, delete, view options.

``` powershell
curl -v -X POST  http://localhost:8000/item -H "Content-Type: application/json" -d '{"user_id": "user1234", "keywords": [ "hammer", "nails", "tools"],   "description": "A hammer and nails set",  "image": "https://placekitten.com/200/300",   "lat": 51.2798438,"lon": 1.0830275 }'
curl -v -X GET http://localhost:8000/items
curl -v -X GET http://localhost:8000/item/0
curl -v -X DELETE  http://localhost:8000/item/1
curl -v -X OPTIONS http://localhost:8000/
```
#### Testing
For testing the server use the following command in the main directory
``` powershell
make test_server
```
or 
``` powershell
pytest
```

#### Refernces
* https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
* https://rapidapi.com/guides/handle-cors-express
* https://stackoverflow.com/questions/58244999/how-to-access-a-specific-part-of-req-body-node-js
* https://medium.com/@anshurajlive/read-dictionary-data-or-convert-dictionary-into-an-array-of-objects-in-javascript-e9c52286d746
* https://www.tutorialspoint.com/Remove-elements-from-a-Dictionary-using-Javascript#:~:text=To%20remove%20an%20element%20from,it%20using%20the%20delete%20operator
* https://github.com/nodejs/node/issues/4182
* https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs
* https://javascript.info/keys-values-entries
* https://github.com/calaldees
* https://github.com/KieranBest
* https://github.com/Joshua-Yuill
* Throughout the implementation of this assignment we (Kieran, Joshua, Allan) had discussions about different topics such as the use of filter in javaScript, object.values, object.keys, nested dictionary, req.params, how to use the test to help debug our code
