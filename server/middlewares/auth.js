const jwt = require('jsonwebtoken');

const auth = (req,res,next)=>{
    if(!req.header('Authorization')){
        res.status(404).json('no Auth found authorization denied');
    }
    const token = req.header('Authorization').split(' ')[1]
    if(!token){
        res.status(401).json({error:'No token found authorisation denied'});
    }
    try{
        const decoded = jwt.verify(token,'secret_token');
        req.user = decoded;
        next()
    }catch(e){
        res.status(400).json('invalid token')
    }
}

module.exports = auth;