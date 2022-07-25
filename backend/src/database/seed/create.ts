import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { member } from './member';
import { enrollmentStatus } from './enrollment-status';

async function main() {
  await prisma.member.deleteMany();
  await prisma.enrollmentStatus.deleteMany();

  await enrollmentStatus();
  await member();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });