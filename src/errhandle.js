const errHandle = (req, res, next) =>{
    try{

        throw new Error("dmskdmksd");
        res.send("Get all data");
    }
    catch (err) {
        res.status(500).send("Some error contact support team!")
    }
}

module.exports={
    errHandle
}