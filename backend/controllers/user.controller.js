const User = require("../modals/user.modal");
const {
    hashPassword,
    checkPassword
} = require("../utils/hash.util");
const {
    sendOtp,
    verifyOtp
} = require("../utils/otp.util");

exports.getUserInfo = async (req,res) => {
    const {userId} = req.data;
    try {
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message:"User not found ! invalid user-id."})
        }

        return res.json({message:"Successfull !", user});
    } catch (error) {
        console.error("Error in getting user info user.controller", error);
        return res.status(500).json({
            message: "Something went wrong while getting you into your account.",
            error: error.message
        })
    }
}
exports.signup = async (req, res) => {
    const {
        name,
        phone,
        email,
        password
    } = req.body;
    try {
        if (!password || !phone || !name) {
            return res.status(400).json({
                message: "Please provide all the required fields."
            })
        }
        const user = await User.findOne({
            phone
        });
        if (user) {
            return res.status(400).json({
                message: "Phone number already registered."
            });
        }

        const hashedPassword = await hashPassword(password)
        const newUser = await User.create({
            name,
            phone,
            email,
            password: hashedPassword
        });

        await sendOtp('email', user.email)
        return res.json({
            message: "You have successfully registered your account.",
            user: newUser
        })

    } catch (error) {
        console.error("Error in signup user.controller", error);
        res.status(500).json({
            message: "Something went wrong while registering your account.",
            error: error.message
        });
    }
};
exports.login = async (req, res) => {
    const {
        phone,
        email,
        password
    } = req.body;
    try {
        let user;
        if (phone) {
            user = await User.findOne({
                phone
            }, {
                name: 1,
                password: 1
            });
        } else {
            user = await User.findOne({
                email
            }, {
                name: 1,
                password: 1
            });
        }

        if (!user) {
            return res.status(404).json({
                message: "Phone number or email not registered."
            })
        }
        const isPassRight = await checkPassword(password, user.password);
        if (!isPassRight) {
            return res.status(402).json({
                message: "Password is incorrect."
            });
        }

        return res.json({
            message: "You have successfully logged in your account",
            user
        })
    } catch (error) {
        console.error("Error in login user.controller", error);
        return res.status(500).json({
            message: "Something went wrong while logging you into your account.",
            error: error.message
        })
    }
};

exports.checkOtp = async (req, res) => {
    const userId = req.params.id;
    const {
        otp
    } = req.body;
    try {
        const user = await User.findById(userId);
        const otpResponse = await verifyOtp(otp, userId);
        if (!otpResponse.status) {
            return res.status(402).json({
                message: otpResponse.message
            });
        }

        if (user.status == 'un-verified') {
            user.status = 'verified';
            await user.save();
            return res.json({
                message: 'You have registered successfully !'
            })
        }

        user.status = 'updating-password';
        await user.save();
        return res.json({
            message: 'OTP matched successfully ! '
        })

    } catch (error) {
        console.error("error in verifying otp", error);
        return res.status(500).json({
            message: 'Internal server error',
            error
        })
    }
};
exports.updatePassword = async (req, res) => {
    const {
        userId
    } = req.data;
    const {
        oldPassword,
        newPassword
    } = req.body;
    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({
            message: 'Invalid userId user not found !'
        });
        if (oldPassword) {
            const isPassCorrect = await checkPassword(oldPassword, user.password);
            if (!isPassCorrect) {
                return res.status(401).json({
                    message: 'Wrong password ! please try again.'
                })
            }

            user.password = await hashPassword(newPassword);
            await user.save();
            return res.json({
                message: "Password updated successfully !"
            })
        }

        if (user.status != 'updating-password') return res.status(400).json({
            message: 'Invalid attempt ! '
        });
        user.password = await hashPassword(newPassword);
        return res.json({
            message: "Password updated successfully ! "
        })
    } catch (error) {
        console.error("error in updating password", error);
        return res.status(500).json({
            message: "Internal server error !",
            error
        })
    }
}

//admin action
exports.getAllUser = async (req,res) => {
    const {size, page} = req.query;
    try {
        const users = await User.find({}).skip((page || 0)*(size || 30));
        return res.json({message:"Successfull !", users, length:users.length()})
    } catch (error) {
          console.error("Error in login user.controller", error);
        return res.status(500).json({
            message: "Something went wrong while logging you into your account.",
            error: error.message
        })
    }
}
exports.deleteUser = async (req, res) => {
    const {
        userId
    } = req.body;
    try {
        const user = await User.findByIdAndDelete(userId);
        return res.json({message:"User deleted successfully !", user});
    } catch (error) {
        console.error("Error in deleting user.controller", error)
        return res.status(500).json({message:"Internal server error ! try later.", error:error.message});
    }
}

exports.logOut = async (req, res) => {

};