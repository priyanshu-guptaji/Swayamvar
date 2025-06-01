const express = require("express");
const errorHandler = require("./middlewares/Handling404.middleware");
const ApiError = require("./utils/ApiError");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/v1", require("./routes"));

// 404 handler
app.use((req, res, next) => {
  next(new ApiError(404, `Route ${req.originalUrl} not found`));
});

// Error handling middleware - should be last
app.use(errorHandler);

// server
module.exports = app;