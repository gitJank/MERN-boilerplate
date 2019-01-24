const router = require('express').Router()

router.use('/users', require('./user/userRoute'))

module.exports = router
