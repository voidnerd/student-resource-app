var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var User = new Schema({
    first_name: {
        type: String,
        required:true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    phone: {
        type: Number,
        required: true
    },
    dob: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true

    }

}, {
    collection: 'users'
});

module.exports = mongoose.model("User", User);