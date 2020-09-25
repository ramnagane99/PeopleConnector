const express = require("express");
const connectDB = require("./config/db");
const app = express();

//Connect DB
connectDB();

//init middleware
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(`Server on ${PORT}`);