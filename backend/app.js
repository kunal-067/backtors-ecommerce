const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRoutes = require("./routes/user.route");
const productRoutes = require("./routes/product.route")
const orderRoutes =  require("./routes/order.route");
const reviewRoutes = require("./routes/review.rote");
const cartRoutes = require("./routes/cart.route");

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
app.use("/api/v2", userRoutes);
app.use("/api/v2", productRoutes);
app.use("/api/v2", orderRoutes);
app.use("/api/v2", cartRoutes);
app.use("/api/v2", reviewRoutes);



module.exports = app;

