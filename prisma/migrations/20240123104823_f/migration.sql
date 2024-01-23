/*
  Warnings:

  - You are about to drop the column `about` on the `socials` table. All the data in the column will be lost.
  - You are about to drop the column `address` on the `socials` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `socials` DROP COLUMN `about`,
    DROP COLUMN `address`;
