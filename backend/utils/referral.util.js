const User = require("../modals/user.modal");

const generateRandomCode = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const referralCode = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length)
        referralCode += characters.charAt(index);
    }

    return referralCode;
}
exports.generateReferralCode = async (length) => {
    const referralCode = generateRandomCode(length || 12);
    const isCodeExists = await User.findOne({referralCode},{_id:1});
    if(isCodeExists){
        await generateReferralCode();
    }else{
        return referralCode;
    }
};

exports.productRefIncome = async (refCode, amount) => {
    try {
        if(!refCode) return;
        const sponsor = await User.find({referralCode:refCode});
        if(!sponsor){
            return {status:false, message:"Invalid sponsor detail !"};
        } 
        sponsor.earnings += amount;
        sponsor.balance += amount;

        await sponsor.save();
    } catch (error) {
        return {status:false, message:"Internal server error !"}   
    }
}