const { Router } = require("express");
const { getOrders, buyProduct, getAllOrders, updateOrder } = require("../controllers/order.controller");
const { verifyAdmin } = require("../middlewares/verifyRoles");

const route = Router();
route.get('/orders', getOrders);
route.post('/orders', buyProduct);

route.get('/all-orders',  verifyAdmin, getAllOrders);
route.put('/update-order/:id',  verifyAdmin, updateOrder);

module.exports = route;