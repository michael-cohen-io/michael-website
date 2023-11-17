/*
  Warnings:

  - Added the required column `team` to the `WorkEntry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WorkEntry" ADD COLUMN     "team" TEXT NOT NULL;
