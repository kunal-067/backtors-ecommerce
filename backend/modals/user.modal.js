const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    size: {
        type: String,
        trim:true,
    },
    color:{
        type:String,
    },
    quantity: {
        type: Number,
        default: 1
    },

    addedAt: {
        type: Date,
        default: Date.now()
    }
});


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        trim:true,
        index:true,
        required: true
    },
    email: { 
        type:String,
        unique:true,
        trim:true 
    },
    password: {
        type: String,
        required: true
    },

    status:{
        type:String,
        enum:['un-verified', 'verified'],
        default:'un-verified'
    },
    cart: [cartSchema],

    registeredAt: {
        type: Date,
        default: Date.now()
    },
});


const User = mongoose.model('User', userSchema)
module.exports = User;