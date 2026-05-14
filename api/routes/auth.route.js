import  express from "express";

import { register, login, signout } from "../controllers/auth.controller.js";

const router = express.Router();


router.get("/test", (req, res) => { 
    console.log("working ");
})

router.post("/register", register);

router.post("/login", login);

router.post("/signout", signout);

export default router;