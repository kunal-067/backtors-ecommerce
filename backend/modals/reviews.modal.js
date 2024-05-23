const {
    Schema,
    default: mongoose
} = require("mongoose");

const reviewSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        required:true
    },
    type:{
        type:String,
        enum:["Real", "Fake"],
        default:"Real"
    },
    userName: String,
    message: String,
    images: [{
        data: Buffer
    }],
    stars: Number
}, {
    timestamps: true
})

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;