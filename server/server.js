import express from "express";
import connectDB from "./config/db_config.js";
const app = express();

connectDB();
app.use("/", (req, res) => {
  res.send("server is running  on 3000 port");
});

app.listen(3000, () => {
  console.log(" server is running on 3000 port");
});
