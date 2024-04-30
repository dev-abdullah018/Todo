let secureApi = (req,res,next)=>{
    console.log("ami", req.headers);

    if(req.headers.authorization == "nvR7u2XW#a4"){
        next()
    }else{
        res.send({error : "Invalid api"})
    }
}

module.exports = secureApi;