import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const enrollmentStatus = async () => {
  await prisma.enrollmentStatus.createMany({
    data: [
      {
        id: 1,
        name: 'enrolled',
      },
      {
        id: 2,
        name: 'absented',
      },
      {
        id: 3,
        name: 'withdraw',
      },
    ],
  });
};
