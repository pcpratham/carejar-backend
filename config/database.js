const mongoose = require("mongoose");
require("dotenv").config();



const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL)
        .then(() => { console.log("Database connection established") })
        .catch((err) => {
            console.log("Error connecting to database");
            console.log(err.message);
        });
}

module.exports = dbConnect;

