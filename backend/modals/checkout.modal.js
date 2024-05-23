const {
    Schema,
    Model
} = require("mongoose");

const checkoutSchema = Schema({
    userName: {
        type: String
    },
    userPhone: {
        type: Number,
        trim: true
    },
    userEmail: {
        type: String,
        trim: true
    },

    products: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number,
            default: 1
        },
        size: {
            type: String
        },
        discount: {
            type: Number,
            default: 0
        },
        appliedCoupons: []
    }],

    totalPrice: {
        type: Number,
        default: 0
    },
    discount:{type:Number, default:0} ,
    paidAmount: {
        type: Number,
        default: 0
    },
    couponApplied: [{
        name: "",
        code: ""
    }],
}, {
    timestamps: true
});

const Checkout = Model('Checkout', checkoutSchema);
module.exports = Checkout;