
const express = require('express')

const app = express()


const port = process.env.PORT || 4000
app.use(express.json()) 
const { users } = require('./state')

const counter = users.length + 1; 


/* BEGIN - create routes here */
app.get("/users", (req, res) => {
  console.log("you are visiting the default route")
  res.json(users)
})  


 
app.get("/users/:id", (req, res) => {
  const userID = users.find(user => user._id == req.params.id) 
  console.log(userID)
  res.send(userID) 
});

//To not have to hardcode it...
//req.body.id... 
 
app.post("/users", (req, res) => { 
  const newUser = {
    "_id": counter,
    "name": "Batman",
    "occupation": "Crime Fighter",
    "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"
}
  // users.unshift(newUser)
  // res.json(users)
  const newData = [...users, newUser];

  res.json(newData)

});

app.put("/users/:userId", (req, res) => {  
  const userId = req.params.userId
  const user = users.find(user => user._id == userId) //user is callback method
  user.name = "John"
  res.json(user)
})

app.delete(`/users/:userId`, (req, res) => { 
  const user = users.find(user => user._id == req.params.userId) 
  user.isActive = "offline"
  console.log(user)
  // users.shift()
  res.send("deleted")
})





/* END - create routes here */

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))