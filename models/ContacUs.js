const mongoose = require('mongoose')


const Contact = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    suggesstion: {
        type: String,
        required: true,
    }
}, {
    timestamps: true //important
})


module.exports = mongoose.model("contact", Contact)