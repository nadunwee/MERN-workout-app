require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workouts");

const app = express(); // express app

// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listern for request
    app.listen(process.env.PORT, () => {
      console.log("connected to db & listning in port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
