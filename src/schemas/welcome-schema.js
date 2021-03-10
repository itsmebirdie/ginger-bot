const mongoose = require('mongoose');

const reqString = { type: String, required: true }

const welcomeSchema = mongoose.Schema({
    _id: {
        type: String,
        requir
    }
    channelId: String,
    text: String
})