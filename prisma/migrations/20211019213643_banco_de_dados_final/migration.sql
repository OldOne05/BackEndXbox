/*
  Warnings:

  - You are about to drop the `_generotoperfis` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_generotoperfis` DROP FOREIGN KEY `_generotoperfis_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_generotoperfis` DROP FOREIGN KEY `_generotoperfis_ibfk_2`;

-- DropTable
DROP TABLE `_generotoperfis`;

-- CreateTable
CREATE TABLE `_JogoToPerfis` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_JogoToPerfis_AB_unique`(`A`, `B`),
    INDEX `_JogoToPerfis_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_JogoToPerfis` ADD FOREIGN KEY (`A`) REFERENCES `Jogo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_JogoToPerfis` ADD FOREIGN KEY (`B`) REFERENCES `Perfis`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
