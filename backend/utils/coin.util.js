exports.giveCoin = async (user, coins) => {
    try {
        user.coins += coins;
        await user.save();
        return {status:true, message:"Coin updated successfully !"}
    } catch (error) {
        return {status:false, message:"Something went wrong !"}
    }
}