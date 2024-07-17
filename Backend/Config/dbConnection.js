import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = async () => {
  const dbLink = process.env.DB_LINK;
  await mongoose
    .connect(dbLink)
    .then(() => {
      console.log("database conncted sucessfully");
    })
    .catch((error) => {
      console.log("db is not connected ERROR:", error);
    });
};

export default dbConnection;
