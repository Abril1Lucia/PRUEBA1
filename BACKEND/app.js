import express from "express"
import dotenv from "dotenv";
import { connectionMongo } from "./src/Config/dataBase.js";
import { usersRouter } from "./src/routes/Users.routes.js";
import loginRouter from "./src/routes/login.routes.js";
import cors from "cors"

const app = express(); 
dotenv.config();
const port = process.env.PORT;
connectionMongo();
app.use(cors())
app.use(express.json())

app.use('/usuarios', usersRouter)
app.use('/iniciarSesion', loginRouter)

app.listen(port, () => {
    console.log("llore haciendolo... pero lo logre ", port);
  });
  