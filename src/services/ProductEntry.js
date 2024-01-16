import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function updateProductBalance(productId, inputBalance) {
  if (!productId) {
    throw new Error('O campo productId está vazio!');
  }

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      Input: {
        select: {
          balance: true,
        },
        orderBy: {
          createdAt: 'desc', // Ordena as entradas pela data de criação em ordem decrescente
        },
      },
    },
  });

  //const totalInputBalance = product?.Input?.reduce((total, input) => total + input.balance, 0) || 0;
  const updatedBalance = product.balance + inputBalance;

  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      balance: updatedBalance,
    },
  });
}

async function InputCalculation(inputData) {
  if (!inputData.product_id) {
    throw new Error('O campo product_id está vazio!');
  }


  try {
    const createdInput = await prisma.input.create({
      data: {
        date: new Date(inputData.date),
        product_id: inputData.product_id,
        balance: inputData.balance,
      },
    });

    // Atualiza o balance do produto relacionado à entrada após criar a nova entrada
    await updateProductBalance(inputData.product_id, inputData.balance);

    return createdInput;
  } catch (error) {
    console.error('Erro ao criar requisição de Entrada:', error);
    throw new Error(`Erro ao criar requisição de Entrada: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

export default {
  InputCalculation,
};
