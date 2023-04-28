import express from 'express';
const router = express.Router();
import { createToken, stkPush } from '../controller/token.js';

router.post("/", createToken,stkPush);

export default router;