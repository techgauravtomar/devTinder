const express = require ('express');
const app = express(); 




app.use("/hello", (req, res) => {
    res.send("Hello Hello Hello!")
  })

  app.use((req, res) => {
    res.send("Hello form the server!")
  })


app.listen(3000, () => {
    console.log("Server is successfully listeninig port 3000....")
})
