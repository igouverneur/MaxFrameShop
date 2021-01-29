const jwt = require('jsonwebtoken');

exports.userProtect = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    if(token == null) return res.status(401).send('Unauthorized')

    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if(err) return res.status(403).send(" invalid token")
        req.user = user
        
        next()
    })
}

