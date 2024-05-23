const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
    code: {
        type: Number,
        trim:true,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: {
            expires: '5m'
        } // TTL index to automatically delete documents after 5 minutes
    }
});

const OTP = mongoose.model('OTP', otpSchema);

module.exports = OTP;