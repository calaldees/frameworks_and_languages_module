const express = require('express')
const app = express()
const port = 8000
app.use(express.json())

//items= {1:["foo"], 2:["fee",],3: ["faa"]}
items=[]


app.get('/', (req, res) => {
  res.send('hello world')
})
  
app.get('/items', (req,res)=>{
  res.send(items)
  res.status(200).json(items)
})

app.post('/item', (req,res)=>{
    items.push(req.body)
    res.status(201).json(items)
})

app.delete('/item/:itemId',(req,res)=>{
  items= items.filter(obj => obj.itemId !== parseFloat(req.params.itemId))
  res.status(204).json()

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})