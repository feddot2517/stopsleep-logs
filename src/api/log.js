const { Log } = require("../models/log");

module.exports = {
    log: async function (req, res) {
        const log = new Log(req.query);
        await log.save();

        res.send('log was saved')
    },
    readLog: async function(req, res) {
        const logs = await Log.find();
        res.json(logs);
    }
}