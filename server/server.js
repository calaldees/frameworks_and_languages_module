const { json, response } = require('express')
const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(express.json())

// access req.body directly as a object
app.use(bodyParser.json()) //https://stackoverflow.com/questions/58244999/how-to-access-a-specific-part-of-req-body-node-js
app.use(bodyParser.urlencoded({ extended: true }))  // to support JSON-encoded bodies

// enabling CORS for any unknown origin
//the source for the cors header is : https://www.section.io/engineering-education/how-to-use-cors-in-nodejs-with-express/
// and  https://rapidapi.com/guides/handle-cors-express

app.use(cors({
  
}))


/*
curl -v -X POST  http://localhost:8000/item -H "Content-Type: application/json" -d '{"user_id": "user1234", "keywords": [ "hammer", "nails", "tools"],   "description": "A hammer and nails set",  "image": "https://placekitten.com/200/300",   "lat": 51.2798438,"lon": 1.0830275 }'
curl -v -X GET http://localhost:8000/items
curl -v -X GET http://localhost:8000/item/0
curl -v -X DELETE  http://localhost:8000/item/1
curl -v -X OPTIONS http://localhost:8000/
*/
// a dictionary to store the items created
items = {}
  

//Used for a human to know the service is working
app.get('/', (req, res) => {
  return res.status(200).send('<html><body>Your HTML text</body></html>')
})

// filter user name: return all the items created by the same user otherwise return all items
app.get('/items' ,(req,res)=>{
  if(req.query.user_id)
  {
    res.status(200).json(Object.values(items).filter(i  => i.user_id == req.query.user_id)) //Allan helped in understanding how to use filter
    return;
  }
  res.status(200).json(Object.values(items))
})
//get specific item by its id
app.get('/item/:id',(req,res)=>{ 
  if (Object.keys(items).includes(req.params.id)) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  {
    res.status(200)
    res.json(items[req.params.id]) 
  }
  else
  {
    res.status(404).json("Item not found")
  }
})

//https://medium.com/@anshurajlive/read-dictionary-data-or-convert-dictionary-into-an-array-of-objects-in-javascript-e9c52286d746
app.post('/item', (req,res)=>{
  if (!req.body.user_id || !req.body.description || !req.body.keywords || !req.body.lat || !req.body.lon) //check for required fields
  {
    return res.status(405).json({message: 'there is missing fields'})
  }
  else{
    ID=  Math.max( ...Object.keys(items)) +1; //find the max id 
    if(ID == "-Infinity"){
      ID= 0
    }
  req.body.id=ID;
  req.body.date_from= new Date().toISOString().slice(0, 10) // https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

  items[ID]=req.body; 
  res.status(201).json(items[ID])
  console.log(items[ID])
  }
})
// delete an item by it's id
app.delete('/item/:id',(req,res)=>{
  if ( Object.keys(items).includes(req.params.id)) //check if the requested id is in the list of items
  {
    delete(items[req.params.id])    //https://www.tutorialspoint.com/Remove-elements-from-a-Dictionary-using-Javascript#:~:text=To%20remove%20an%20element%20from,it%20using%20the%20delete%20operator.
    res.status(204).json("OK")
    console.log("item deleted", items)
    console.log(items)

  }
  else{ 
    res.status(404).json("Item not found")
  }

})

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})

//https://github.com/calaldees/frameworks_and_languages_module/blob/main/docs/assignment_hints.md
//https://www.digitalocean.com/community/tutorials/nodejs-req-object-in-expressjs