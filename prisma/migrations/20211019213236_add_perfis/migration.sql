-- CreateTable
CREATE TABLE `_GeneroToPerfis` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_GeneroToPerfis_AB_unique`(`A`, `B`),
    INDEX `_GeneroToPerfis_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_GeneroToPerfis` ADD FOREIGN KEY (`A`) REFERENCES `Genero`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_GeneroToPerfis` ADD FOREIGN KEY (`B`) REFERENCES `Perfis`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
