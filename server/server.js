const { json } = require('express')
const express = require('express')
const app = express()
const port = 8000
const cors = require('cors')
app.use(express.json())

// enabling CORS for any unknown origin
app.use(cors());
/*
curl -v -X POST    http://localhost:8000/item -H "Content-Type: application/json" -d '{"id":0, "user_id": "user1234", "keywords": [ "hammer", "nails", "tools"],   "description": "A hammer and nails set",  "image": "https://placekitten.com/200/300",   "lat": 51.2798438,"lon": 1.0830275, "date_from": "2022-10-14T21:06:55.540Z", "date_to": "2022-10-14T21:06:55.540Z" }'
curl -v -X GET     http://localhost:8000/items
curl -v -X GET     http://localhost:8000/item/123
curl -v -X DELETE  http://localhost:8000/item/123
curl -v -X OPTIONS http://localhost:8000/
*/

items={"id":0, "user_id": "user1234", "keywords": [ "hammer", "nails", "tools"],   "description": "A hammer and nails set",  "image": "https://placekitten.com/200/300",   "lat": 51.2798438,"lon": 1.0830275, "date_from": "2022-10-14T21:06:55.540Z", "date_to": "2022-10-14T21:06:55.540Z"}
myItems={}
deletedItem={}

app.get('/', (req, res) => {
  return res.status(200).send('<html><body>Your HTML text</body></html>')
})
  
app.get('/items', (req,res)=>{
  //res.send(items)
  return res.status(200).json(items)
})

app.get('/item/:id',(req,res, next)=>{
  myItems= items.filter(obj => obj.id === parseFloat(req.params.id))
  if (myItems.length ===0)
  {
    console.log("I didn't get my item")
    return res.status(404).send("Item not found")
  }
  else
  {
    return res.status(200).send.json(myItems)
    console.log("I got my item")
  }
  /*
  if (items.filter(obj=> obj.id===parseFloat(req.params.itemId)))
  {
  res.status(200).send(json(items.filter(obj=> obj.id===parseFloat(req.params.itemId))))
  console.log("I got my item")

  }
  else
  {
      console.log("I didn't got my item")
    res.status(404).send(json())

  }
  */
})
app.post('/item', (req,res)=>{
  if (Object.keys(req.body).sort().toString() !== 'user_id,keywords,description,image,lat,lon') {
    return res.status(405).json({message: 'there is missing fields'})
  }
  items.put(req.body)
  res.status(201).json(items)
})

app.delete('/item/:id',(req,res)=>{
  deletedItem= items.filter(obj => obj.id === parseFloat(req.params.id))
  if (deletedItem.length===0)
  {
    return res.status(404).json("Item not found")
    console.log("not Found")
  }
  else{
    items= items.filter(obj => obj.id !== parseFloat(req.params.id))
      return res.status(204).json("OK")
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