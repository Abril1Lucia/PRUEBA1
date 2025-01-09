import loginUsers from "../services/loginUsers.service.js";

import express from "express";

const loginRouter = express.Router();

loginRouter.post('/Users', loginUsers)

export default loginRouter;