

// app.use(
//   "/admin/getAlldata", 
//   (req, res, next) =>{
//   const token = 'xyz'
//   const isAdminAuthorized = token === 'xyz'
//   if (isAdminAuthorized) {
//     res.send("Got all data")
//   }else{
//     res.status(401).send("Unauthorized Request")
//   }
// })

    const adminAuth =
    (req, res, next) =>{
    const token = 'xyz2'
    const isAdminAuthorized = token === 'xyz'
    if (!isAdminAuthorized) {
      res.send("Unauthorized Request")
    }else{
      next();
    }
  }

  const userAuth =
  (req, res, next) =>{
  console.log("User is getting check!")
  const token = 'xyz'
  const isAdminAuthorized = token === 'xyz'
  if (!isAdminAuthorized) {
    res.send("Unauthorized Request")
  }else{
    next();
  }
}
  


module.exports={
    adminAuth,
    userAuth
}