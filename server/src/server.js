import express, { json } from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "GET / request",
  });
});
app.listen(process.env.PORT, () => {
  console.log(`Sever is running on port ${process.env.PORT}`);
});
