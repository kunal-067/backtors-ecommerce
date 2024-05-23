const emailOtpMessage = (otp) => {
    return `Your OTP is ${otp}. Please do not share this code with anyone`;
}

module.exports = {emailOtpMessage}