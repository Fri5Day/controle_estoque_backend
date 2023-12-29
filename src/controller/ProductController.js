import { prisma } from "../database/prisma.js";

export const productFindAll = async (req, res) => {
    try {
        const product = await prisma.product.findMany();
        return res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }

};

export const createProduct = async (req, res) => {
    const { name, ncmId, balance, buyPrice, salePrice } = req.body;
    const parsedCode = parseInt(ncmId, 10);
    if (isNaN(parsedCode)) {
        console.log(parsedCode)
        return res.status(400).json({ error: 'O campo "ncmId" deve ser um número.' });
    }

    const product = await prisma.product.create({
        data: { name, ncmId: parsedCode, balance, buyPrice, salePrice },
    });

    return res.json(product);

}
