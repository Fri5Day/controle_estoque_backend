import { prisma } from "../database/prisma.js";

export const createInput = async (req, res) => {
    try {
      const { date, product_id, balance } = req.body;
  
      const input = await prisma.input.create({
        data: { date, product_id, balance },
      });
      
      return res.json(input);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao criar requisição de entrada" });
    }
  };