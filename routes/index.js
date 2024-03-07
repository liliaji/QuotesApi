import { Router } from "express";
import quotesRoutes from "./quotes.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/quotes", quotesRoutes)

export default router;