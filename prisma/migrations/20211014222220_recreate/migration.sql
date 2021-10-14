/*
  Warnings:

  - You are about to drop the `generos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jogo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userjogos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `generos` DROP FOREIGN KEY `Generos_jogoId_fkey`;

-- DropForeignKey
ALTER TABLE `userjogos` DROP FOREIGN KEY `UserJogos_jogosId_fkey`;

-- DropForeignKey
ALTER TABLE `userjogos` DROP FOREIGN KEY `UserJogos_usuariosId_fkey`;

-- DropTable
DROP TABLE `generos`;

-- DropTable
DROP TABLE `jogo`;

-- DropTable
DROP TABLE `userjogos`;
