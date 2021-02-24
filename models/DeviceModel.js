const mongoose = require("mongoose")

const DeviceSchema = mongoose.Schema({

    id:{
        type: Number,
        required: true
    },
    deviceName:{
        type: String,
        required: true
    },
    deviceType:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    imei:{
        type: Number,
        required: true
    },
    os:{
        type: String,
        required: true
    },
    osVersion:{
        type: String,
        required: true
    },
    rom:{
        type: String,
        required: true
    },
    ram:{
        type: String,
        required: true
    },
    isActivated:{
        type: Boolean,
        default: false
    },
    isAvailable:{
        type: Boolean,
        default: true
    },
    releaseDate:{
        type: String,
        default: Date.now
    }
})

module.exports = mongoose.model("Device", DeviceSchema)