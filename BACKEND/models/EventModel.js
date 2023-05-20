const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventID:{
        type: String,
        required: true
    },
    eventName: {
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    
    startingTime:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    timeDuration:{
        type: Number,
        required: true
    }
    
    }
)

const event = mongoose.model("Event",eventSchema);

module.exports = event;