import { prisma } from "../database/prisma.js";

export const findAll = async (req, res) => {
    try {
        const ncm = await prisma.ncm.findMany();
        return res.json(ncm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }

};

export const findById = async (req, res) => {
    try {
        const { id } = req.params;
        const ncm = await prisma.ncm.findUnique({
            where: { id: Number(id) }
        });
        res.json(ncm);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error });
    }
};

export const createNcm = async (req, res) => {
    const { name, code } = req.body;

    const ncm = await prisma.ncm.create({
        data: { name, code },
    });

    return res.json(ncm);
};

export const updateNcm = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, code } = req.body;
      
        const ncm = await prisma.ncm.update({
            where: { id: Number(id) },
            data: { name, code}
        });
        res.json(ncm);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};

export const deleteNcm = async (req, res) => {
    try {
        const { id } = req.params;
        const ncm = await prisma.ncm.delete({
            where: { id: Number(id) }
        });
        res.json({ mensagem: `Ncm ${id} removido com sucesso!` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
};