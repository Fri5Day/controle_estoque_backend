import express from 'express';
const router = express();
import { createOutput } from '../controller/OutputController.js';

router.post("/output", createOutput);

export default router;
