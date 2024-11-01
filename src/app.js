const express = require ('express');
const app = express(); 


app.get("/user/:userId", (req, res) =>{
  console.log(req.query)
  res.send({firstname: "Gaurav", lastname: "Tomar"})
})



  // app.use((req, res) => {
  //   res.send("Hello form the server!")
  // })


app.listen(3000, () => {
    console.log("Server is successfully listeninig port 3000....")
})
