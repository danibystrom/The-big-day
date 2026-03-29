/**
 * Prisma läser env("DATABASE_URL") i schemat. Vid npm install finns ofta ingen .env än —
 * vi sätter en platshållare så bara `prisma generate` kan köras (ingen DB-koppling behövs).
 */
if (!process.env.DATABASE_URL) {
  process.env.DATABASE_URL =
    "postgresql://127.0.0.1:5432/prisma_generate_only?schema=public";
}

require("child_process").execSync("prisma generate", {
  stdio: "inherit",
  env: process.env,
});
