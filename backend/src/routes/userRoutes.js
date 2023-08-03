import { Router } from "express";
import { getUser } from "../controllers/userControllers.js";

const userRoute = Router();

userRoute.get("/", getUser)



export default userRoute;