import { PrismaClient } from '@prisma/client';
import apes from '../data/apes';

const prisma = new PrismaClient();

async function main() {
  await prisma.ape.createMany({
    data: apes
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => await prisma.$disconnect);
