const OTP = require("../modals/otp.model");
const sendMail = require("./email.util");
const {
    emailOtpMessage
} = require("./messages.util");

exports.sendOtp = async (medium, email) => {
    try {
        let otp = Math.floor(Math.random() * 9000 + 1000);
        const newOtp = new OTP({
            code: otp,
            user: 'idjdkd'
        })
        await newOtp.save();

        if (medium == 'email') {
            await sendMail(email, 'Forgot Password !', emailOtpMessage(otp));

        } else if (medium == 'phone') {

        }

        console.log('OTP sent successfully !')
        return otp;
    } catch (error) {
        console.error("error in sendOtp function", error);
        throw new Error('Error occured while sending OTP', error);
    }
};

exports.verifyOtp = async (enteredOtp, userId) => {
    try {
        const otp = await OTP.findOne({
            user: userId
        });
        if (!otp) {
            return {
                status: false,
                message: 'OTP has been expired ! please resend it.'
            }
        }
        if (otp.code != enteredOtp) {
            return {
                status: false,
                message: 'OTP is incorrect !'
            };
        }

        if (otp.code == enteredOtp) {
            return {
                status: true,
                message: "OTP verified successfully !"
            }
        }

    } catch (error) {
        console.error("Error in verifyOtp function", error)
        throw new Error('Error occured while verifying OTP', error);
    }
}