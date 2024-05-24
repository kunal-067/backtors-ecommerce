const { Router } = require("express");
const { getCart, updateCart, addToCart, deleteFromCart } = require("../controllers/cart.controller");

const route = Router();

route.get("/cart", getCart);
route.post("/cart-item", addToCart);
route.patch("/cart-item/:id", updateCart);

route.delete("/cart-item", deleteFromCart)
module.exports = route;

