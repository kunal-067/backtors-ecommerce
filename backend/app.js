const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route")
const orderRoutes =  require("./routes/order.route");
const reviewRoutes = require("./routes/review.rote");
const cartRoutes = require("./routes/cart.route");
const verifyToken = require("./middlewares/verifyToken");

const app = express();

app.use(cors({
    origin:process.env.FRONTEND_URI || '*',
    credentials:true
}))
app.use(express.json({limit:"16kb"}));    
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

//route setups ----------
app.use("/api/v2", verifyToken, userRoutes);
app.use("/api/v2", verifyToken, productRoutes);
app.use("/api/v2", verifyToken, orderRoutes);
app.use("/api/v2", verifyToken, cartRoutes);
app.use("/api/v2", verifyToken, reviewRoutes);



module.exports = app;

