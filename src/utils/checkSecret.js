const config = require('../config')

module.exports = {
    checkSecret: function (req, res, next) {
        if(req.query.secret !== config.secret) {
            res.send('auth error')
        }else {
            next();
        }
    }
}