const Product = require("../modals/product.modal");

//function on products collection
exports.getRandomProducts = async (req, res) => {
    const {
        size
    } = req.query;
    try {
        const products = await Product.aggregate([{
            $sample: {
                size
            }
        }]);

        return res.json({
            message: "Products fetched successfully !",
            products
        })
    } catch (error) {
        console.error("Error getting random product", error);
        return res.status(500).json({
            message: "Internal server error.",
            error: error.message
        });
    }
};
exports.searchProducts = async (req, res) => {
    const {
        key,
        page,
        size
    } = req.query;
    try {
        const products = await Product.find({
                $text: {
                    $search: key
                }
            }, {
                score: {
                    $meta: 'textScore'
                }
            })
            .sort({
                score: {
                    $meta: 'textScore'
                }
            }).skip((page || 0) * (size || 20)).limit(size || 20); // Sort by relevance score

        return res.json({
            message: "Products get successfully !",
            products,
            page
        })
    } catch (error) {
        console.error("Error searching product", error);
        return res.status(500).json({
            message: "Internal server error.",
            error: error.message
        });
    }
}


//single product functions =------
exports.getProductInfo = async(req,res) => {
    const productId = req.params.id;
    try {
        const product = await Product.findById(productId,{
            addedAt:0,
            updates:0
        });

        return res.json({message:"Successfully get product info. ", product})
    } catch (error) {
        console.error("Error getting product info", error);
        return res.status(500).json({
            message: "Internal server error.",
            error: error.message
        });
    }
}

//admin actions -------------------
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        return res.json({
            message: "Products fetched successfully !",
            products: products.reverse()
        });
    } catch (error) {
        console.error("Error getting all product", error);
        return res.status(500).json({
            message: "Internal server error.",
            error: error.message
        });
    }
}
exports.addProduct = async (req, res) => {
    const {
        productData
    } = req.body;
    try {
        const newProduct = new Product({
            ...productData
        });
        await newProduct.save();
        return res.status(200).json({
            message: "successfully added product"
        })
    } catch (error) {
        console.error("Error adding product", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
exports.updateProduct = async (req, res) => {
    const  productId = req.params.id ;
    const {
        updatedData,
        message
    } = req.body;
    try {
        const product = await Product.findByIdAndUpdate(productId, updatedData, {
            new: true
        })

        return res.json({
            message: "Product updated successfully !",
            product
        })

    } catch (error) {
        console.error("Error updating product", error);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};
exports.deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const res = await Product.findByIdAndDelete(productId);
        if (!res) {
            return res.status(401).json({
                message: "Something went wrong in deleting product."
            });
        }

        return res.json({
            message: "Product deleted successfully !",
            product: res
        })
    } catch (error) {
        console.error("Error deleting product", error);
        return res.status(500).json({
            message: "Internal server error.",
            error: error.message
        });
    }
}