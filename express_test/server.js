const express = require('express')
const app = express()
const port = 8000

items= {"1":["foo","bar"], "2":["fee", "bar"],"3": ["faa", "bar"]}
app.get('/', (req, res) => {
  res.send({
    "id": 0,
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
    "date_from": "2022-10-09T21:44:28.396Z",
    "date_to": "2022-10-09T21:44:28.396Z"
  })
})

app.get('/items', (req,res)=>{
  res.json(items)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Docker container exit handler - https://github.com/nodejs/node/issues/4182
process.on('SIGINT', function() {process.exit()})