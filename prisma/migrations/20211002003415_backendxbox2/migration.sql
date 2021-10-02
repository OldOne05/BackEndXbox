-- CreateTable
CREATE TABLE `Usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `sobrenome` VARCHAR(191),
    `email` VARCHAR(191) NOT NULL,
    `senha` VARCHAR(191) NOT NULL,
    `CPF` INTEGER NOT NULL,

    UNIQUE INDEX `Usuarios_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Perfis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `imagem` VARCHAR(191) NOT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Perfis_titulo_key`(`titulo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Jogo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `capa` VARCHAR(191) NOT NULL,
    `descricao` VARCHAR(191) NOT NULL,
    `ano` INTEGER NOT NULL,
    `nota` INTEGER,
    `linkYtb` VARCHAR(191) NOT NULL,
    `linkGmp` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Jogo_titulo_key`(`titulo`),
    UNIQUE INDEX `Jogo_capa_key`(`capa`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserJogos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuariosId` INTEGER,
    `jogosId` INTEGER,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Generos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(191) NOT NULL,
    `jogoId` INTEGER NOT NULL,

    UNIQUE INDEX `Generos_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Perfis` ADD CONSTRAINT `Perfis_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserJogos` ADD CONSTRAINT `UserJogos_usuariosId_fkey` FOREIGN KEY (`usuariosId`) REFERENCES `Usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserJogos` ADD CONSTRAINT `UserJogos_jogosId_fkey` FOREIGN KEY (`jogosId`) REFERENCES `Jogo`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Generos` ADD CONSTRAINT `Generos_jogoId_fkey` FOREIGN KEY (`jogoId`) REFERENCES `Jogo`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
