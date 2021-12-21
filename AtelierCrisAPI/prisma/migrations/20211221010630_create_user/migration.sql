/*
  Warnings:

  - You are about to drop the column `categoryId` on the `SubCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subCategoryId]` on the table `Category` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[itemId]` on the table `SubCategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subCategoryId` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `itemId` to the `SubCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SubCategory" DROP CONSTRAINT "SubCategory_categoryId_fkey";

-- DropIndex
DROP INDEX "SubCategory_categoryId_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "subCategoryId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "SubCategory" DROP COLUMN "categoryId",
ADD COLUMN     "itemId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Item" (
    "id" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "price" TEXT NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_subCategoryId_key" ON "Category"("subCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "SubCategory_itemId_key" ON "SubCategory"("itemId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_subCategoryId_fkey" FOREIGN KEY ("subCategoryId") REFERENCES "SubCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubCategory" ADD CONSTRAINT "SubCategory_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "Item"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
