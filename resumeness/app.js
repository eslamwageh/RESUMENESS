const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require('./routes/auth.route.js');
 
dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080;
mongoose
    .connect(process.env.DB_URL)
    .then(() => console.log("Database is connected"))
    .catch((err) => {
        if (err) return console.error(err);
    });
    
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, (err) => {
    if (err) return console.error(err);
    console.log(`Server started listening at port ${PORT}`);
    console.log(global.user);
});