const { Router } = require("express");
const { addReview, getAllReviews, getProductreview, deleteReview } = require("../controllers/review.controller");
const { verifyAdmin } = require("../middlewares/verifyRoles");

const route = Router();

route.post("/reviews", addReview);
route.get("/reviews/:id", getProductreview);
route.get("/reviews", verifyAdmin ,getAllReviews);
route.delete("/reviews/:id", verifyAdmin, deleteReview);
module.exports = route;

