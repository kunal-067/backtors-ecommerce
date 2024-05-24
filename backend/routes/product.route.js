const { Router } = require("express");
const { getRandomProducts, searchProducts, getProductInfo, getAllProducts, addProduct, updateProduct, deleteProduct } = require("../controllers/product.controller");
const { verifyAdmin } = require("../middlewares/verifyRoles");

const route = Router();
route.get("/random-products", getRandomProducts);
route.get("/searched-products", searchProducts);

route.get("/product-info/:id", getProductInfo);

route.get("/all-products", verifyAdmin, getAllProducts);
route.post("/add-new-product", verifyAdmin, addProduct);
route.put("/edit-product/:id", verifyAdmin, updateProduct);
route.delete("/remove-product/:id", verifyAdmin, deleteProduct);
module.exports = route;

