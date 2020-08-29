const { Schema, model } = require('mongoose');

const logSchema = new Schema({
    deviceId: {
        type: String,
        required: true
    },

    signal: {
        type: Number,
        required: true
    },

    signal2: {
        type: Number,
        required: false
    },

    date: {
        type: Date,
        required: true
    },
    value: {
        type: Number,
        required: true,
    }
});

module.exports = {Log: model('Log', logSchema, 'logs')};