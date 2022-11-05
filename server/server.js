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
  origin: 'http://localhost:8000',
  methods: ['POST','GET','OPTIONS','DELETE'],
}));


/*
curl -v -X POST  http://localhost:8000/item -H "Content-Type: application/json" -d '{"user_id": "user1234", "keywords": [ "hammer", "nails", "tools"],   "description": "A hammer and nails set",  "image": "https://placekitten.com/200/300",   "lat": 51.2798438,"lon": 1.0830275 }'
curl -v -X GET http://localhost:8000/items
curl -v -X GET http://localhost:8000/item/0
curl -v -X DELETE  http://localhost:8000/item/1
curl -v -X OPTIONS http://localhost:8000/
*/
let items = {
  0: {
    
      "user_id": "user1234",
      "keywords": [
        "hammer",
        "nails",
        "tools"
      ],
      "description": "A hammer and nails set",
      "image": "https://placekitten.com/200/300",
      "lat": 51.2798438,
      "lon": 1.0830275,
      "date_from": "2022-10-31T16:54:59.391Z",
      "date_to": "2022-10-31T16:54:59.391Z"
    }
  }
  // get the max id //https://bobbyhadz.com/blog/javascript-get-max-id-in-array-of-objects
  /*
  const ids = items.map(object => {
    return object.id;
  });
const NEXT_ID = Math.max(...ids)+1;
*/


app.get('/', (req, res) => {
  return res.status(200).send('<html><body>Your HTML text</body></html>')
})
  
app.get('/items' ,(req,res)=>{
  console.log("I got my items", res.statusCode)
  res.status(200)
  res.json(items)
  
})

app.get('/item/:id',(req,res)=>{
  
  if (items[req.params.id]=== undefined)
  {
    console.log("I didn't get my item")
    res.status(404)
    res.send("Item not found")
  }
  else
  {
    res.status(200)
    res.json(items[req.params.id])
    console.log("I got my item")
  }
})

app.post('/item', (req,res)=>{
  RequiredFields = ['user_id','keywords','description','lat','lon']
  if (Object.keys(req.body).toString() !== 'user_id,keywords,description,lat,lon') {
    return res.status(405).json({message: 'there is missing fields'})
 }
 items.keys()
  newItem.id=NEXT_ID
  newItem.user_id=Object.keys(req.body).user_id
  newItem.keywords= Object.keys(req.body).keywords
  newItem.description=Object.keys(req.body).description
  newItem.lat=Object.keys(req.body).lat
  newItem.lon=Object.keys(req.body).lon
  newItem.date_from=new Date().toISOString().slice(0, 10)

  //Object.assign(items, newItem)
  
  console.log("I got a post")
  res.statusCode(201).json(items)
})

app.delete('/item/:id',(req,res)=>{
  if (items[req.params.id]=== undefined)
  {
    res.status(404).json("Item not found")
    console.log("not Found")
  }
  else{
    delete[req.params.id] //https://www.tutorialspoint.com/Remove-elements-from-a-Dictionary-using-Javascript#:~:text=To%20remove%20an%20element%20from,it%20using%20the%20delete%20operator.
    res.status(204)
      console.log(" found")
  }

/*
    if(items.filter(obj => obj.id === parseFloat(req.params.id)))
    {
      items= items.filter(obj => obj.id !== parseFloat(req.params.id))
      res.status(204).json("OK")
      console.log(" found")
    }
    else if (items.filter(obj => obj.id !== parseFloat(req.params.id)))
    {
      res.status(404).json("Item not found")
      console.log("not Found")
    }

  */
})
/*
app.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});
*/

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})