const express = require('express');
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4000;
const dbConnect = require("./config/database");
const router = require("./routers/allRoutes");
var cors = require("cors");
app.use(
    cors({
      origin: "*",
    })
);


app.use(express.json());
app.use("/api", router);
app.listen(PORT,(req,res) => {
    console.log(`App is running at ${PORT}`);
});
dbConnect();

app.get("/" , (req,res) => {
    return res.send(`<h1>Hello </h1>`);
});







