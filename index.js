
const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const { users } = require('./state')

/* BEGIN - create routes here */
app.get("/users", (req, res) => {
  console.log("you are visiting the default route")
  res.json(users)
})  

|
 
app.get("/users/:id", (req, res) => {
  const userID = users.find(user => user._id == req.params.id) 
  console.log(userID)
  res.send(userID) 
});

//To not have to hardcode it...
//req.body.id... 
 
app.post("/users", (req, res) => { 
  const newUser = {
    "_id": 22,
    "name": "Batman",
    "occupation": "Crime Fighter",
    "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
}
  users.unshift(newUser)
  res.json(users)
});

app.put("/users/1", (req, res) => {
  users[0].name = "Robin"
  res.json(users)
})

app.delete("/users/1", (req, res) => {
  users.shift()
  res.json(users)
})





/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))