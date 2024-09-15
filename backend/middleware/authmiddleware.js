const jwt = require('jsonwebtoken');
const User = require('../Models/usermodel'); 
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            return res.status(401).send({ error: 'No token provided' });
        }

        const decoded = jwt.verify(token, 'your_jwt_secret'); 
        const user = await User.findById(decoded._id);

        if (!user) {
            return res.status(401).send({ error: 'User not found' });
        }

        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        res.status(401).send({ error: 'Invalid token' });
    }
};

module.exports = authMiddleware;
