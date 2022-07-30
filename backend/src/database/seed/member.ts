import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const member = async () => {
  await prisma.member.createMany({
    data: Array(10)
      .fill(0)
      .map((_, index) => ({
        id: index + 1,
        name: 'member' + (index + 1),
        email: 'email' + (index + 1) + '@example.com',
        enrollmentStatusId: 1,
      })),
  });
};
