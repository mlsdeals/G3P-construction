import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";

// Uses the Neon serverless driver adapter instead of Prisma's native binary
// query engine. This avoids downloading a platform-specific engine binary at
// build/deploy time (handy on Railway) and is the pairing Neon recommends
// for serverless Postgres. Falls back cleanly as long as DATABASE_URL is a
// Neon connection string.
const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

function createPrismaClient() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error(
      "DATABASE_URL is not set. Add your Neon connection string to .env (see .env.example) before the estimate form or any database access can work."
    );
  }
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
