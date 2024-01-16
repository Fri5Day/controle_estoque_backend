import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function updateProductBalanceOnExit(productId, outputBalance) {
  if (!productId) {
    throw new Error('O campo productId está vazio!');
  }

  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
  });

  if (!product) {
    throw new Error('Produto não encontrado!');
  }

  const updatedBalance = product.balance - outputBalance;

  await prisma.product.update({
    where: {
      id: productId,
    },
    data: {
      balance: updatedBalance,
    },
  });
}

async function outputCalculation(outputData) {
  if (!outputData.product_id || outputData.balance === undefined) {
    throw new Error('Os campos product_id ou balance estão vazios!');
  }

  try {
    const createdOutput = await prisma.output.create({
      data: {
        date: new Date(outputData.date),
        product_id: outputData.product_id,
        balance: outputData.balance,
      },
    });

    await updateProductBalanceOnExit(outputData.product_id, outputData.balance);

    return createdOutput;
  } catch (error) {
    console.error('Erro ao criar requisição de Saída:', error);
    throw new Error(`Erro ao criar requisição de Saída: ${error.message}`);
  } finally {
    await prisma.$disconnect();
  }
}

export default {
  outputCalculation,
};
