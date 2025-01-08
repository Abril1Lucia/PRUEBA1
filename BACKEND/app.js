import express from "express"
import dotenv from "dotenv";
import { connectionMongo } from "./src/Config/dataBase.js";

const app = express(); 
dotenv.config();
const port = process.env.PORT;
connectionMongo();

app.listen(port, () => {
    console.log("lo logramos :)", port);
  });
  