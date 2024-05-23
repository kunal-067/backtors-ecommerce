const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.headers['Authorization'];
    if (!token) {
        return res.status(404).json({
            message: "Invalid user ! jwt token missing."
        });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({message:"Your session has been expired ! please login again"})
        }
        if(decoded.status == 'un-verified'){
            return res.status(405).json({message:"Your account hasn't verified yet."})
        }
        req.data = decoded;
        next();
    })

}

module.exports = verifyToken ;