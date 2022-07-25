import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { member } from './member';

async function main() {
  await prisma.member.deleteMany();
  await member();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });