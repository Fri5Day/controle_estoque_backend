import express from 'express';
const router = express();
import { createInput } from '../controller/InputController.js';

router.post("/input", createInput);

export default router;
