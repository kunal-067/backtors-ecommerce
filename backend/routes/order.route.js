const { Router } = require("express");
const { getOrders, buyProduct, getAllOrders, updateOrder } = require("../controllers/order.controller");
const verifyToken = require("../middlewares/verifyToken");
const { verifyAdmin } = require("../middlewares/checkRoles");

const route = Router();
route.get('/orders', verifyToken, getOrders);
route.post('/orders', verifyToken, buyProduct);

route.get('/all-orders', verifyToken, verifyAdmin, getAllOrders);
route.put('/update-order/:id', verifyToken, verifyAdmin, updateOrder);

module.exports = route;