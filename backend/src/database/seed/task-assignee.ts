import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const taskAssignee = async () => {
  await prisma.taskAssignee.createMany({
    data: Array(80)
      .fill(0)
      .map((_, index) => ({
        id: index + 1,
        taskId: index + 1,
        memberId: 1,
        taskProgressStatusId: 1,
      })),
  });
};
