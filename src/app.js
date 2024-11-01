const express = require ('express');
const app = express(); 

const {adminAuth, userAuth} = require("./middlewares/auth");
const{errHandle} = require("./errhandle")

// app.use ("/admin", adminAuth);



app.get(
  "/admin/getAlldata", 
  (req, res, next) =>{
    res.send("Got all data")
})

app.get(
  "/admin/deleteAlldata", 
  (req, res, next) =>{
    res.send("Deleted all data")
})

app.get("/user", userAuth, (req, res) =>{
  res.send("User is authorized")
})

app.use(
  "/user/getAlldata", 
  errHandle
)


// app.use(
//   "/", 
//   (req, res, next) =>{
//   console.log("1st Response");
//   // res.send({firstname: "Gaurav", lastname: "Tomar"});
//   next();
// })

// app.get(
//   "/user",
//   (req,res,next)=>{
//     console.log("Handling / user route");
//     next();
//   },
//   (req,res,next)=>{
//     // res.send("Hello form the 1st Response!");
//     console.log("1st Response");
//     next();
//   },
//   (req,res,next)=>{
//     res.send("Hello form the 2nd Response!");
//     console.log("2nd Response");
//     // next();
//   }
// )

  // app.use((req, res) => {
  //   res.send("Hello form the server!")
  // })


app.listen(3000, () => {
    console.log("Server is successfully listeninig port 3000....")
})
