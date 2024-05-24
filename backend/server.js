require("dotenv").config();
const dbConnect = require('./configs/db.config');
const app = require("./app");
const port = process.env.PORT || 80;


dbConnect().then(() => {
    
    app.listen(port, (error) => {
        if (error) {
            console.error(`Error occured while starting the server`, error);
        } else {
            console.log(`Server running on PORT ${port}`);
        }
    });


}).catch(error => {
    console.error('error in conning to database', error);
    throw error;
})