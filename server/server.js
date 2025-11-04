import express from "express";
const app = express();

app.use("/", (req, res) => {
  res.send("server is running  on 3000 port");
});

app.listen(3000, () => {
  console.log(" server is running on 3000 port");
});
