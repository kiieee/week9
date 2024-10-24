const cors = require("cors");
const express = require("express");
const app = express();
const User = require("./db/models/userModel");
const userRouter = require("./db/routes/userRoutes")

require("dotenv").config();

app.use(cors());
app.use(express.json());

function syncTables() {
    User.sync({alter:true})
};

const port = 5001 || process.env.PORT;

// const SQLconnection = require("../connection.js");
// SQLconnection();
app.use(userRouter);
app.get("/health", (req,res) => res.status(200).send("API is healthy"));

syncTables();

app.listen(port, () => {console.log(`Server is running on port ${port}`)});
