import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnection from "./Config/dbConnection.js";
import router from "./Router/userRouter.js";
import router2 from "./Router/blogRouter.js";

dotenv.config();
dbConnection();

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/v1", router);
app.use("/api/v1", router2);

app.get("/", (req, res) => {
  res.send("this is slash route");
});

app.listen(port, (req, res) => {
  console.log("server is started on port no:", port);
});
