const express = require('express')
const app = express()
const port = 8000
app.use(express.json())

//items= {1:["foo"], 2:["fee",],3: ["faa"]}
items=[{"id": 123, "name": "test", "notes": "some notes"}]
myItems=[]

app.get('/', (req, res) => {
  res.status(200).send('<html><body>Your HTML text</body></html>')
})
  
app.get('/items', (req,res)=>{
  res.send(items)
  res.status(200).json(items)
})

app.get('/item/:id',(req,res)=>{
  myItems= items.filter(obj => obj.id === parseFloat(req.params.id))
  if (myItems.length ===0)
  {
    console.log("I didn't got my item")
    res.status(404).json("I didn't got my item")
    res.send("Item not found")
  }
  else
  {
    res.status(200).json(myItems)
    console.log("I got my item")
  }
  /*
  if (items.filter(obj=> obj.id===parseFloat(req.params.itemId)))
  {
  res.status(200).json(items.filter(obj=> obj.id===parseFloat(req.params.itemId)))
  console.log("I got my item")

  }
  else
  {
      console.log("I didn't got my item")
    res.status(404).json()

  }
  */
})


app.post('/item', (req,res)=>{
    items.push(req.body)
    res.status(201).json(items)
})

app.delete('/item/:itemId',(req,res)=>{

    if(item.id === req.params.itemId)
    {
      items= items.filter(obj => obj.itemId !== parseFloat(req.params.itemId))
      res.status(204).json("OK")
      console.log(" found")
    }
    else
    {
      res.status(404).json("Item not found")
      console.log("not Found")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})