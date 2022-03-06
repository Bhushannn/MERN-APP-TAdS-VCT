const jwt = require('jsonwebtoken');
const jwtsecret = "xyz123";

const fetchuser = (req, res, next) => {
    const token = req.header('authToken');
    const count = req.header('userScore');
    if (!token) {
        return res.status(401).json({ error: "Enter the Valid Uthentication-----" });
    }
    // if (!count) {
    //     return res.status(401).json({ error: "Enter the Valid Uthentication-****----" });
    // }
    try {
        const data = jwt.verify(token, jwtsecret);
        // console.log(data);
        req.user = data;
        req.count = count;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Enter the Valid Uthentication++++" });
    }
}

module.exports = fetchuser;