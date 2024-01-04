import ProductEntryService from "../services/ProductEntry.js";

export const createInput = async (req, res) => {
  try {
    const { date, product_id, balance } = req.body;

    // Convertendo product_id para um inteiro
    const productIdAsInt = parseInt(balance, 10); 

    const input = await ProductEntryService.InputCalculation({
      date,
      product_id, 
      balance: productIdAsInt,
    });

    return res.json(input);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar requisição de entrada" });
  }
};
