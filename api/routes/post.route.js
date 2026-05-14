import  express from "express";

const router = express.Router();

router.get("/test", (req, res) => { 
    console.log("working ");
})

router.get("/:id", (req, res) => { 
    console.log("working ");
})

router.post("/:id", (req, res) => { 
    console.log("working ");
})

router.put("/:id", (req, res) => { 
    console.log("working ");
})

router.patch("/:id", (req, res) => { 
    console.log("working ");
})

router.delete("/:id", (req, res) => { 
    console.log("working ");
})

export default router;