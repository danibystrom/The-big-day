-- CreateTable
CREATE TABLE "Rsvp" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "allergies" TEXT,
    "transportSaturday" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Rsvp_pkey" PRIMARY KEY ("id")
);
