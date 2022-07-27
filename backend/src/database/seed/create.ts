import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { member } from './member';
import { enrollmentStatus } from './enrollment-status';
import { task } from "./task";

async function main() {
  await prisma.member.deleteMany();
  await prisma.enrollmentStatus.deleteMany();
  await prisma.task.deleteMany();
  await prisma.taskProgressStatus.deleteMany();

  await enrollmentStatus();
  await member();
  await task();
  await taskProgressStatus();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });