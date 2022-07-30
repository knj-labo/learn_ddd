import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const taskProgressStatus = async () => {
  await prisma.taskProgressStatus.createMany({
    data: [
      {
        id: 1,
        name: 'untouched',
      },
      {
        id: 2,
        name: 'waiting',
      },
      {
        id: 3,
        name: 'done',
      },
    ],
  });
};
