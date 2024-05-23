const { Router } = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { getCart, updateCart, addToCart, deleteFromCart } = require("../controllers/cart.controller");

const route = Router();

route.get("/cart", verifyToken, getCart);
route.post("/cart-item", verifyToken, addToCart);
route.patch("/cart-item/:id", verifyToken, updateCart);

route.delete("/cart-item", verifyToken, deleteFromCart)
module.exports = route;

