/*
  Warnings:

  - You are about to drop the column `name` on the `WorkEntry` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "WorkEntry_name_key";

-- AlterTable
ALTER TABLE "WorkEntry" DROP COLUMN "name";
