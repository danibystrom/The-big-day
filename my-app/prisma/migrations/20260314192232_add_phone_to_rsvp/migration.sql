/*
  Warnings:

  - You are about to drop the column `number` on the `Rsvp` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Rsvp` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rsvp" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "allergies" TEXT
);
INSERT INTO "new_Rsvp" ("allergies", "createdAt", "email", "firstName", "id", "lastName") SELECT "allergies", "createdAt", "email", "firstName", "id", "lastName" FROM "Rsvp";
DROP TABLE "Rsvp";
ALTER TABLE "new_Rsvp" RENAME TO "Rsvp";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
