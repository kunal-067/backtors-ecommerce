const { Router } = require("express");
const { signup, login, getUserInfo, checkOtp, updatePassword, getAllUser, deleteUser, logOut } = require("../controllers/user.controller");
const verifyToken = require("../middlewares/verifyToken");
const { verifyAdmin } = require("../middlewares/checkRoles");

const route = Router();

route.get("/user-info", verifyToken, getUserInfo);
route.post("/signup", signup);
route.post("/login", login);

route.post("/check-otp/:id", checkOtp );
route.patch("/update-password", verifyToken, updatePassword);
route.post("/logout", verifyToken, logOut);

//admin actionss -----------
route.get("/all-users",  verifyToken, verifyAdmin, getAllUser);
route.delete("/user", verifyToken, verifyAdmin, deleteUser);

module.exports = route;

