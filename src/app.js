const express = require ('express');
const app = express(); 


app.use(
  "/user", 
  (req, res, next) =>{
  console.log("1st Response");
  // res.send({firstname: "Gaurav", lastname: "Tomar"});
  next();
},
(req, res, next)=>{
  // res.send("2nd Response!")
  next();
},
(req, res, next)=>{
  // res.send("3nd Response!")
  next();
},
(req, res, next)=>{
  res.send("4nd Response!")
}
)



  // app.use((req, res) => {
  //   res.send("Hello form the server!")
  // })


app.listen(3000, () => {
    console.log("Server is successfully listeninig port 3000....")
})
