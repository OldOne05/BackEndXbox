/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[senha]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[CPF]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `Jogo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `capa` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `nota` INTEGER,
    `trailer` VARCHAR(191),
    `gmp` VARCHAR(191),

    UNIQUE INDEX `Jogo_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Genero_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_GeneroToJogo` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GeneroToJogo_AB_unique`(`A`, `B`),
    INDEX `_GeneroToJogo_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_email_key` ON `Usuarios`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_senha_key` ON `Usuarios`(`senha`);

-- CreateIndex
CREATE UNIQUE INDEX `Usuarios_CPF_key` ON `Usuarios`(`CPF`);

-- AddForeignKey
ALTER TABLE `_GeneroToJogo` ADD FOREIGN KEY (`A`) REFERENCES `Genero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GeneroToJogo` ADD FOREIGN KEY (`B`) REFERENCES `Jogo`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
