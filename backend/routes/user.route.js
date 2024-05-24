const { Router } = require("express");
const { signup, login, getUserInfo, checkOtp, updatePassword, getAllUser, deleteUser, logOut } = require("../controllers/user.controller");
const { verifyAdmin } = require("../middlewares/verifyRoles");

const route = Router();

route.get("/user-info", getUserInfo);
route.post("/signup", signup);
route.post("/login", login);

route.post("/check-otp/:id", checkOtp );
route.patch("/update-password", updatePassword);
route.post("/logout", logOut);

//admin actionss -----------
route.get("/all-users",  verifyAdmin, getAllUser);
route.delete("/user", verifyAdmin, deleteUser);

module.exports = route;

