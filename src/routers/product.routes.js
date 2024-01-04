import express from 'express';

const router = express();
import { createProduct, productFindAll } from '../controller/ProductController.js';

router.post("/product", createProduct);

router.get("/product", productFindAll);

export default router;
