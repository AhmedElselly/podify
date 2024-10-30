import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`Couldn't connect to DB!!!\n`, err);
  });

app.get("/", (req: any, res: any) => {
  return res.json({ message: "Hello typescript" });
});

app.listen(PORT, () => {
  console.log(`Server is on port ${PORT}`);
});
