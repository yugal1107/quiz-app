import express from "express";
import router from "./router/auth-router.js";

const app = express();
const port = 3000;

app.use("/auth", router);

app.use("/", (req, res) => {
  res.status(200).send("Hello World! form use ");
});

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
