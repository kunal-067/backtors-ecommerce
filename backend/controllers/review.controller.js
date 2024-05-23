const Review = require("../modals/reviews.modal");
const User = require("../modals/user.modal");

exports.addReview = async (req, res) => {
    const {
        userId,
        role
    } = req.data;
    const {
        productId,
        message,
        name
    } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user && role != "admin") {
            return res.status(404).json({
                message: "Invalid token ! user not found."
            })
        }

        const userName = role == "Admin" ? name : user.name;
        const type = role == "Admin" ? "Fake" : "Real";
        const newReview = new Review({
            user: userId,
            product: productId,
            type,
            userName,
            message,
        })
        await newReview.save();
        return res.json({
            message: "Review added successfully !",
            review: newReview
        });
    } catch (error) {
        console.error("Error in adding review", error);
        return res.status(500).send({
            message: "Internal Server Error !",
            error: error.message
        });
    }
}
exports.getProductreview = async (req, res) => {
    const productId = req.params.id;
    try {
        const reviews = await Review.find({
            product: productId
        }, {
            createdAt: 0,
            updatedAt: 0,
            type: 0
        });
        return res.json({
            message: "Reviews collected successfully !",
            reviews
        })
    } catch (error) {
        console.error("Error in getting product review", error);
        return res.status(500).send({
            message: "Internal Server Error !",
            error: error.message
        });
    }
}

//admin actions -------
exports.getAllReviews = async (req, res) => {
    const {
        size,
        page
    } = req.query;
    try {
        const reviews = await Review.find({}).sort({
                createdAt: -1
            }) // Sort by createdAt field in descending order (recent first)
            .skip((page || 0) * (size || 30)).limit(size || 30);

        return res.json({
            message: "Successfull",
            reviews
        });

    } catch (error) {
        console.error("Error in getting all reviews", error);
        return res.status(500).send({
            message: "Internal Server Error",
            error: error.message
        })
    }
}
exports.deleteReview = async (req, res) => {
    const reviewId = req.params.id;
    try {
        await Review.findByIdAndDelete(reviewId);
        return res.json({
            message: "Review deleted successfully !",
            status: 200
        })
    } catch (error) {
        console.error("Error in deleting review", error);
        return res.status(500).send({
            message: "Internal Server Error !",
            error: error.message
        });
    }
}