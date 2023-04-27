import express from 'express';
const router = express.Router();
import { createToken } from '../controller/token.js';

router.get("/", createToken);

export default router;