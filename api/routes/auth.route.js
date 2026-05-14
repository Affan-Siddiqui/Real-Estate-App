import  express from "express";

const router = express.Router();

router.get("/test", (req, res) => { 
    console.log("working ");
})

router.post("/register", (req, res) => { 
    console.log("working ");
})

router.post("/login", (req, res) => { 
    console.log("working ");
})

router.post("/signup", (req, res) => { 
    console.log("working ");
})

export default router;