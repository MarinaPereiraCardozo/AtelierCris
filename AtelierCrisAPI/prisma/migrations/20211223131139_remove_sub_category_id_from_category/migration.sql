/*
  Warnings:

  - You are about to drop the column `subCategoryId` on the `Category` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Category_subCategoryId_key";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "subCategoryId";
