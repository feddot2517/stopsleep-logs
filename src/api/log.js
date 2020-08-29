const { Log } = require("../models/log");

module.exports = {
    log: async function (req, res) {
        const { logs } = req.body.data;

        for (const log of logs) {
            const newLog = new Log(log);
            await newLog.save();
        }

        res.send('logs was saved')
    },
    readLog: async function(req, res) {
        const logs = await Log.find();
        res.json(logs);
    }
}