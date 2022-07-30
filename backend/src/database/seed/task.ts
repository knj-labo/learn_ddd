import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const task = async () => {
  await prisma.task.createMany({
    data: Array(80)
      .fill(0)
      .map((_, index) => ({
        id: index + 1,
        title: 'task' + (index + 1),
        content: 'content' + (index + 1),
      })),
  });
};
