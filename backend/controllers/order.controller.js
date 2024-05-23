const Order = require("../modals/orders.modal");
const Product = require("../modals/product.modal");
const User = require("../modals/user.modal");
const { productRefIncome } = require("../utils/referral.util");

exports.getOrders = async (req,res) => {
    const {userId} = req.data;
    try {
        const orders = await Order.find({user: userId});
        if(!orders){
            return res.status(404).json({message:"Invalid user ! try later"});
        }

        return res.json({message:"Successfull !", orders:orders.reverse(), length:orders.length()});
    } catch (error) {
        console.error("Error occured while getting orders", error);
        return res.status(500).json({
            message: "Internal server error",
            error:error.message
        })
    }
}
exports.buyProduct = async (req, res) => {
    const {
        userId
    } = req.data;
    const {
        products,
        shippingDetails,
    } = req.body;
    const referredBy = req.query.refBy;
    try {
        const user = await User.findById(userId, {
            _id: 1,
            name: 1
        });
        if (!user) {
            return res.status(404).json({
                message: "User not found ! "
            });
        }

        const expectedDelivery = Date.now() + (3 * 24 * 60 * 60 * 1000)
        const newOrder = new Order({
            user: userId,
            products: [],
            shippingDetails: {
                ...shippingDetails,
                expectedDelivery
            }
        });

        const prodIncmeInfo = [];
        products.map(async elem => {
            const product = await Product.findById(elem.id, {price:1, quantity:1, discount:1, refIncome:1, buyCoin:1 });
            prodIncmeInfo.push(product)
            newOrder.products.push({
                data: product._id,
                sellingPrice: product.price,
                payableAmount: product.price - product.discount,
                quantity: elem.quantity,
                size: elem.size,
            })

            product.quantity -= elem.quantity;
            await product.save();
        })

        await newOrder.save();
        productRefIncome(referredBy)
        return res.json({
            message: "Product bought successfully",
            order: newOrder
        });
    } catch (error) {
        console.error("Error occured while buying product", error);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
};

exports.changeOrder = async (req, res) => {
    const {
        userId
    } = req.data;
    const {
        orderId,
        status
    } = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({
                message: "Invalid orderId ! Order not found."
            })
        }
    } catch (error) {

    }
};

//admin action
exports.getAllOrders = async (req,res) => {
    const {status, page, size} = req.query; 
    try {
        let orders;
        if(status){
            orders = await Order.find({status}).skip((page || 0)*(size || 20)).limit(size || 20);
        }else{
            orders = await Order.find({}).skip((page || 0)*(size || 20)).limit(size || 20);
        }

        return res.json({message:"Successfull !", orders});
    } catch (error) {
        console.error("Error occured while getting all orders", error);
        return res.status(500).json({
            message: "Internal server error ! ",
            error:error.message
        })
    }
}
exports.updateOrder = async (req, res) => {
    const  orderId = req.params.id;
    const {
        status,
        products
    } = req.body;
    try {
        const order = await Order.findById(orderId);
        if (!order) {
            return res.status(404).json({
                message: "Invalid order id !"
            });
        }

        if (status == 'Completed') {
            order.status = status;
            order.products.map(elem => {
                elem.deliveredAt = Date.now();
            })

        } else {
            products.map(elem => {
                if (elem.status == 'Cancel') {
                    const product = order.products.find(prod => prod._id == elem._id)
                }
            })
        }


    } catch (error) {

    }
};