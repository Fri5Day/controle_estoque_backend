import express from 'express';
const router = express();
import { findAll, findById, createNcm, updateNcm, deleteNcm } from '../controller/NcmController.js';

router.get("/ncm", findAll);
router.get("/ncm/:id", findById); 
router.post("/ncm", createNcm);
router.put("/ncm/:id", updateNcm);
router.delete("/ncm/:id", deleteNcm);

export default router;