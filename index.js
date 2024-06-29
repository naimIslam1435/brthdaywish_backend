const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dataRouter = require("./routers/data")
const cors = require('cors')
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Connecting to MongoDB was successful!"))
    app.use(cors())
    app.use(express.json())
    app.use('/api/love', dataRouter)

app.listen(process.env.PORT, () => {
    console.log(`Backend server is running on port ${process.env.PORT} for Birthday Girl!`);
})