import productRoutes from "./product.routes.js";
import ncmRoutes from "./ncm.routes.js";
import inputRoutes from "./input.routes.js"

import express from 'express';
const router = express.Router();

/* router.get('/', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'Seja bem-vindo(a)',
    version: '1.0.0',
  });
}); */

router.use(productRoutes, ncmRoutes, inputRoutes);

export default router;