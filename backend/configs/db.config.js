const mongoose = require('mongoose');

const dbUri = process.env.DB_URI || 'mongodb://127.0.0.1:27017/ecommerce'
const dbConnect = async () => {
    try{
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: "admin",
        })

        return {message:'connected successfully'}
    }catch(err){
        throw err
    }
};

module.exports = dbConnect;