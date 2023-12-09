-- CreateTable
CREATE TABLE `berita` (
    `idBerita` VARCHAR(191) NOT NULL,
    `judulBerita` VARCHAR(255) NOT NULL,
    `isiBerita` TEXT NOT NULL,
    `tanggalBerita` DATETIME(3) NOT NULL,
    `gambarBerita` VARCHAR(255) NOT NULL,
    `sumberBerita` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`idBerita`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fasyankes` (
    `fasyankes_id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis_fasyankes` VARCHAR(191) NOT NULL,
    `nama_fasyankes` VARCHAR(191) NOT NULL,
    `no_registrasi` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `mou_dinkes` ENUM('SUDAH', 'BELUM', 'SEDANG_BERPROSES') NOT NULL,
    `mou_puskesmas` ENUM('SUDAH', 'BELUM', 'SEDANG_BERPROSES') NOT NULL,
    `nama_puskesmas_jejaring` VARCHAR(191) NOT NULL,
    `perlu_mou_dengan_komunitas` BOOLEAN NOT NULL,
    `tindak_lanjut` VARCHAR(191) NOT NULL,
    `keterangan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`fasyankes_id`)
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

    PRIMARY KEY (`idLaporan`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` ENUM('ADMIN', 'SUPER_ADMIN') NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

