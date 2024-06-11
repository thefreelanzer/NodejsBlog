require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

const PORT = 8080 || process.env.PORT;

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./app/models/index");
connectDB();

/** Import Routes */
const MainRoutes = require("./app/routes/main.route");
const PostRoutes = require("./app/routes/post.route");

/** Routes */
app.use("/", MainRoutes);
app.use("/api/posts", PostRoutes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
