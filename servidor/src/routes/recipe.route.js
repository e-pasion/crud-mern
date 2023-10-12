import { Router } from "express";

const router = Router()

router.get("/123",(req,res)=>{
    res.send("123")
});

export default router;