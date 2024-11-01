const express = require ('express');
const app = express(); 


app.get("/user", (req, res) =>{
  res.send("Get the data succesfully!")
})

app.post("/user", (req, res) => {
  res.send("Post the data successfully!")
})

app.delete("/user", (req,res) =>{
  res.send("Delete the data sucessfully!")
})


app.use("/user", (req, res) => {
    res.send("Hello Hello Hello!")
  })

  app.use((req, res) => {
    res.send("Hello form the server!")
  })


app.listen(3000, () => {
    console.log("Server is successfully listeninig port 3000....")
})
