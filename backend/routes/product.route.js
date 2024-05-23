const { Router } = require("express");
const { getRandomProducts, searchProducts, getProductInfo, getAllProducts, addProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const verifyToken = require("../middlewares/verifyToken");
const { verifyAdmin } = require("../middlewares/checkRoles");

const route = Router();
route.get("/random-products", getRandomProducts);
route.get("/searched-products", searchProducts);

route.get("/product-info/:id", getProductInfo);

route.get("/all-products", verifyToken, verifyAdmin, getAllProducts);
route.post("/add-new-product", verifyToken , verifyAdmin, addProduct);
route.put("/edit-product/:id", verifyToken, verifyAdmin, updateProduct);
route.delete("/remove-product/:id", verifyToken, verifyAdmin, deleteProduct);
module.exports = route;

