-- CreateTable
CREATE TABLE `user` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NULL,
    `email` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sessions` (
    `session_id` VARCHAR(128) NOT NULL,
    `expires` INTEGER UNSIGNED NOT NULL,
    `data` MEDIUMTEXT NULL,

    PRIMARY KEY (`session_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbc_reports` (
    `idLaporan` VARCHAR(191) NOT NULL,
    `namaAtauInisial` VARCHAR(100) NOT NULL,
    `jenisKelamin` ENUM('LAKI_LAKI', 'PEREMPUAN') NOT NULL,
    `umur` INTEGER NOT NULL,
    `nomorTelepon` VARCHAR(15) NOT NULL,
    `alamat` VARCHAR(255) NOT NULL,
    `asalFasilitasKesehatan` VARCHAR(255) NOT NULL,
    `mewakiliPengadu` BOOLEAN NOT NULL,
    `hubunganDenganPengadu` VARCHAR(100) NULL,
    `laporan` ENUM('STIGMA_DAN_DISKRIMINASI', 'PENDAMPINGAN') NOT NULL,
    `sumberStigma` ENUM('DIRI_SENDIRI', 'KELUARGA', 'MASYARAKAT_KOMUNITAS_SEKOLAH', 'FASILITAS_KESEHATAN', 'TEMPAT_KERJA') NOT NULL,
    `waktuPengalaman` VARCHAR(255) NOT NULL,
    `pelakuStigma` VARCHAR(255) NULL,
    `keluhan` TEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`idLaporan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
