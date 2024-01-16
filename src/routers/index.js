import productRoutes from "./product.routes.js";
import ncmRoutes from "./ncm.routes.js";
import inputRoutes from "./input.routes.js"
import outputRoutes from "./output.routes.js"

import express from 'express';
const router = express.Router();

router.use(productRoutes, ncmRoutes, inputRoutes, outputRoutes);

export default router;