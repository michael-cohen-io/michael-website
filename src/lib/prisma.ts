import { Prisma, PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV === "development") global.prisma = prisma;

export default prisma;

const workWithCompany = Prisma.validator<Prisma.WorkEntryDefaultArgs>()({
  include: { company: true },
});

export type WorkWithCompany = Prisma.WorkEntryGetPayload<
  typeof workWithCompany
>;
