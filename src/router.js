import { Router } from "express";
import { createNcm, deleteNcm, findAll, findById, updateNcm } from "./controller/NcmController.js";
import { createProduct, productFindAll } from "./controller/ProductController.js";
import { createTransaction, transactionFindAll, transactionFindById } from "./controller/TransactionController.js";
import { createInput } from "./controller/InputController.js";

export const router = Router();

//Produto
router.get("/product", productFindAll);
router.post("/product", createProduct);

//NCM
router.get("/ncm", findAll);
router.get("/ncm/:id", findById); 
router.post("/ncm", createNcm);
router.put("/ncm/:id", updateNcm);
router.delete("/ncm/:id", deleteNcm);

//Transação
router.get("/transaction", transactionFindAll);
router.get("/transaction/:id", transactionFindById); 
router.post("/transaction", createTransaction);

//Requisição de entrada
router.post("/input", createInput);