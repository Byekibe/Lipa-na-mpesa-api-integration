import express from 'express';
const router = express.Router();
import { createToken, stkPush } from '../controller/token.js';

router.post("/", createToken,stkPush);

// router.get("/test", (req, res) => {
//     createToken()
// })



export default router;