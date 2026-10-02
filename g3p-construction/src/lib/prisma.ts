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
      "DATABASE_URL is not set. Add your Neon connection string as an environment variable before the estimate form or any database access can work."
    );
  }
  const adapter = new PrismaNeon({ connectionString });
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });
}

function getPrismaClient(): PrismaClient {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = createPrismaClient();
  }
  return globalForPrisma.prisma;
}

// Lazy proxy: merely importing `prisma` never reads DATABASE_URL or builds a
// client — the client is only created the first time a property on it is
// actually touched, at request time. This is what lets `next build` import
// API route modules (to collect their metadata) without a database
// configured yet; only a real request at runtime needs DATABASE_URL set.
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop, receiver) {
    return Reflect.get(getPrismaClient() as object, prop, receiver);
  },
});
