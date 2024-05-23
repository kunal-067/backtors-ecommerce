const User = require("../modals/user.modal");

exports.getCart = async (req,res) => {
    const {userId} = req.data;
    try {
        const user = await User.findById(userId, {cart:1});
        if(!user){
            return res.status(404).json({message:"User not found ! invalid user-id"});
        }

        return res.json({message:"Successfull ! ", cart:user.cart, length:user.cart.length})
    } catch (error) {
        console.error("Error in getting cart cart.controller", error);
        return res.status(500).json({
            message: "Something went wrong while getting your cart.",
            error: error.message
        })
    }
}
exports.addToCart = async (req, res) => {
    const {
        userId
    } = req.data;
    const {
        product,
        quantity,
        size,
        color
    } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found ! try again."
            });
        };

        user.cart.push({
            product,
            quantity,
            size: size || null,
            color: color || null
        });

        await user.save();
        return res.json({
            message: "Product added to cart successfully !"
        });

    } catch (error) {
        console.error("Error in adding product to cart : ", error);
        return res.status(500).json({
            message: "Something went wrong please try again !"
        })
    }
};

exports.updateCart = async (req, res) => {
    const {
        userId
    } = req.data;
    const   itemId = req.params.id;
    const {
        updatedData
    } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found ! invalid token."
            });
        }
        const item = user.cart.find(elem => elem._id.equals(itemId));
        if (!item) {
            return res.status(404).json({
                message: "Invalid itemId ! it doesn't fetched in your cart"
            });
        }
        const {
            color,
            size,
            quantity
        } = updatedData;

        if (color) {
            item.color = color;
        }
        if (size) {
            item.size = size;
        }
        if (quantity) {
            item.quantity = quantity;
        }

        await user.save();
        return res.json({
            message: "Cart updated successfully !",
            item
        })
    } catch (error) {
        console.error("Error in updating cart", error);
        return res.status(500).json({
            message: "Internal server error ! Try later."
        });
    }
}

exports.deleteFromCart = async (req, res) => {
    const {
        userId
    } = req.data;
    const {
        itemId
    } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: "User not found ! try again."
            });
        }
        const cart = user.cart;
        const itemIndex = cart.findIndex(item => item._id == itemId);
        if (!itemIndex) {
            return res.status(404).json({
                message: "Item not found ! try again."
            });
        }

        cart.splice(itemIndex, 1);
        await user.save();
        return res.json({
            message: "Item deleted from cart successfully !"
        });

    } catch (error) {
        console.error("Error in deleting item from cart : ", error);
        return res.status(500).json({
            message: "Something went wrong please try again !"
        });
    }
}