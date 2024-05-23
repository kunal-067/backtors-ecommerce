const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    data: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
    },
    quantity: {
        type: Number,
        required: true
    },
    size: String,

    sellingPrice: {
        type: Number,
        required: true
    },
    payableAmount: {
        type: Number,
        required: true
    },

    status:{
        type:String,
        enum:["Pending", "Cancelled", "Delivered", "Returned"],
        default:"Pending"
    },
    cancel: {
        cancelledAt: {
            type: Date
        },
        message: {
            type: String
        },
        cancelledBy: {
            type: String,
            enum: ['Admin', 'User']
        }
    },

    deliveredAt: {
        type: Date
    },

    return: {
        returnedAt: {
            type: Date
        },
        message: {
            type: String
        },
        pickingDate: {
            type: Date
        },
        pickedAt: {
            type: Date
        },
        refundedAt:Date
    },
})

const orderSchema = new mongoose.Schema({
    products: [productSchema],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    shippingDetails: {
        shippingAddress: {
            local: String,
            nearByPoint: String,
            city: String,
            district: String,
            state: String,
            pinCode: Number
        },
        shippingCharges: {
            type: Number,
            default: 0
        },
        expectedDelivery: Date,
        phone: {
            type: Number,
            required: true
        }
    },

    status: {
        type: String,
        enum: ['Pending', 'Completed'],
        default: 'Pending'
    },
    paymentMode:{
        type:String,
        enum:["Cash on delivery", "Online"],
        default:"Cash on delivery"
    },
    paidAt:Date,
    appliedCoupons: [{}],
    orderedAt: {
        type: Date,
        default: new Date()
    },
    completedAt:Date,
});


const Order = mongoose.model("Order", orderSchema);
module.exports = Order;