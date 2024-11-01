const express = require ('express');
const app = express(); 


app.use(
  "/", 
  (req, res, next) =>{
  console.log("1st Response");
  // res.send({firstname: "Gaurav", lastname: "Tomar"});
  next();
})

app.get(
  "/user",
  (req,res,next)=>{
    console.log("Handling / user route");
    next();
  },
  (req,res,next)=>{
    // res.send("Hello form the 1st Response!");
    console.log("1st Response");
    next();
  },
  (req,res,next)=>{
    res.send("Hello form the 2nd Response!");
    console.log("2nd Response");
    // next();
  }
)

  // app.use((req, res) => {
  //   res.send("Hello form the server!")
  // })


app.listen(3000, () => {
    console.log("Server is successfully listeninig port 3000....")
})
