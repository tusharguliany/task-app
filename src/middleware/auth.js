const jwt = require('jsonwebtoken')
const User = require('./../models/user')

const secretKey = process.env.JWT_SECRET

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, secretKey)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token':token })
        if (!user) {
            throw new Error()
        }
        req.token = token
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({error: 'Please Authenticate!'})
    }
}

module.exports = auth