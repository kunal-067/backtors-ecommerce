const { Router } = require("express");
const verifyToken = require("../middlewares/verifyToken");
const { addReview, getAllReviews, getProductreview, deleteReview } = require("../controllers/review.controller");
const { verifyAdmin } = require("../middlewares/checkRoles");

const route = Router();

route.post("/reviews", verifyToken, addReview);
route.get("/reviews/:id", verifyToken, getProductreview);
route.get("/reviews", verifyToken, verifyAdmin ,getAllReviews);
route.delete("/reviews/:id", verifyToken, verifyAdmin, deleteReview);
module.exports = route;

