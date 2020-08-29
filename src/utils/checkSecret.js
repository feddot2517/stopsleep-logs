const config = require('../config')

module.exports = {
    checkSecret: function (req, res, next) {
        if((req.query.secret && req.query.secret === config.secret) || (req.body.data && req.body.data.secret === config.secret)) {
            next();
        }else {
            res.send('auth error')
            console.log('auth error')
        }
    }
}