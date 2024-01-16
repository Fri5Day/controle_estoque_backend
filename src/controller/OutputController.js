import ProductExitService from "../services/ProductExit.js"
export const createOutput = async (req, res) => {
  try {
    const { date, product_id, balance } = req.body;

    const productIdAsInt = parseInt(balance, 10);

    const output = await ProductExitService.outputCalculation({
      date,
      product_id,
      balance: productIdAsInt,
    });

    return res.json(output);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar requisição de Saída" });
  }
};