import { prisma } from "../database/prisma.js";

export const transactionFindAll = async (req, res) => {
    try {
        const transaction = await prisma.transaction.findMany();
        return res.json(transaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }

};

export const transactionFindById = async (req, res) => {
    try {
        const { id } = req.params;
        const transaction = await prisma.transaction.findUnique({
            where: { id: Number(id) }
        });
        res.json(transaction);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error });
    }
};

export const createTransaction = async (req, res) => {
    try {
      const { name, type } = req.body;
  
      const transaction = await prisma.transaction.create({
        data: { name, type },
      });
  
      return res.json(transaction);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar a transação" });
    }
  };