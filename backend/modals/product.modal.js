const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index:"text"
    },
    description: {
        type:String,
        index:"text"
    },
    brand: String,
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },

    images: [{
        data: Buffer,
        url: {
            type: String,
            default: true
        },
        name: String
    }],
    sizes: [String],
    discount: {
        type: Number,
        default: 0
    },
    refIncome:{
        type:Number,
        default:0
    },
    buyCoin:{
        type:Number,
        default:0
    },

    offers: [String],
    stars: Number,
    
    addedAt: {
        type: Date,
        default: Date.now()
    },

    updates: [{
        updatedAt: {
            type: Date,
            default: Date.now()
        },
        message: {
            type: String,
            required: true
        }
    }]
})


const Product = mongoose.model('Product', productSchema);

module.exports = Product