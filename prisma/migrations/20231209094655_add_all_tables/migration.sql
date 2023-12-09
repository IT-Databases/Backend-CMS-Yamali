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

    UNIQUE INDEX `fasyankes_nama_fasyankes_key`(`nama_fasyankes`),
    UNIQUE INDEX `fasyankes_no_registrasi_key`(`no_registrasi`),
    UNIQUE INDEX `fasyankes_alamat_key`(`alamat`),
    PRIMARY KEY (`fasyankes_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `informasi_fasyankes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis_fasyankes` VARCHAR(191) NOT NULL,
    `kabupaten_kota` VARCHAR(191) NOT NULL,
    `nama_fasyankes_id` VARCHAR(191) NOT NULL,
    `no_registrasi_id` VARCHAR(191) NOT NULL,
    `alamat_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `yayasan` (
    `yayasan_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_yayasan` VARCHAR(191) NOT NULL,
    `alamat_yayasan` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`yayasan_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `investigasi_kontak` (
    `investigasi_kontak_id` INTEGER NOT NULL AUTO_INCREMENT,
    `yayasan_id` INTEGER NOT NULL,
    `tanggal_investigasi` DATETIME(3) NOT NULL,
    `jumlah_kontak` INTEGER NOT NULL,

    PRIMARY KEY (`investigasi_kontak_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `terduga_tbc` (
    `terduga_tbc_id` INTEGER NOT NULL AUTO_INCREMENT,
    `investigasi_kontak_id` INTEGER NOT NULL,
    `nama_terduga` VARCHAR(191) NOT NULL,
    `tanggal_lahir` DATETIME(3) NOT NULL,
    `alamat_terduga` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`terduga_tbc_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kasus_ternotif` (
    `kasus_ternotif_id` INTEGER NOT NULL AUTO_INCREMENT,
    `terduga_tbc_id` INTEGER NOT NULL,
    `jenis_kasus` VARCHAR(191) NOT NULL,
    `tanggal_notifikasi` DATETIME(3) NOT NULL,

    PRIMARY KEY (`kasus_ternotif_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbc_ro` (
    `tbc_ro_id` INTEGER NOT NULL AUTO_INCREMENT,
    `kasus_ternotif_id` INTEGER NOT NULL,
    `tanggal_mulai_ro` DATETIME(3) NOT NULL,
    `tanggal_selesai_ro` DATETIME(3) NOT NULL,

    PRIMARY KEY (`tbc_ro_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tbc_so` (
    `tbc_so_id` INTEGER NOT NULL AUTO_INCREMENT,
    `kasus_ternotif_id` INTEGER NOT NULL,
    `tanggal_mulai_so` DATETIME(3) NOT NULL,
    `tanggal_selesai_so` DATETIME(3) NOT NULL,

    PRIMARY KEY (`tbc_so_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `toc_ro` (
    `toc_ro_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tbc_ro_id` INTEGER NOT NULL,
    `nama_toc` VARCHAR(191) NOT NULL,
    `tanggal_kunjungan` DATETIME(3) NOT NULL,

    PRIMARY KEY (`toc_ro_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `verifikasi_data` (
    `verifikasi_data_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tbc_ro_id` INTEGER NOT NULL,
    `status_verifikasi` VARCHAR(191) NOT NULL,
    `tanggal_verifikasi` DATETIME(3) NOT NULL,

    PRIMARY KEY (`verifikasi_data_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kegiatan_tbc_ro` (
    `kegiatan_tbc_ro_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tbc_ro_id` INTEGER NOT NULL,
    `jenis_kegiatan` VARCHAR(191) NOT NULL,
    `tanggal_kegiatan` DATETIME(3) NOT NULL,

    PRIMARY KEY (`kegiatan_tbc_ro_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `informasi_fasyankes` ADD CONSTRAINT `informasi_fasyankes_nama_fasyankes_id_fkey` FOREIGN KEY (`nama_fasyankes_id`) REFERENCES `fasyankes`(`nama_fasyankes`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `informasi_fasyankes` ADD CONSTRAINT `informasi_fasyankes_no_registrasi_id_fkey` FOREIGN KEY (`no_registrasi_id`) REFERENCES `fasyankes`(`no_registrasi`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `informasi_fasyankes` ADD CONSTRAINT `informasi_fasyankes_alamat_id_fkey` FOREIGN KEY (`alamat_id`) REFERENCES `fasyankes`(`alamat`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `investigasi_kontak` ADD CONSTRAINT `investigasi_kontak_yayasan_id_fkey` FOREIGN KEY (`yayasan_id`) REFERENCES `yayasan`(`yayasan_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `terduga_tbc` ADD CONSTRAINT `terduga_tbc_investigasi_kontak_id_fkey` FOREIGN KEY (`investigasi_kontak_id`) REFERENCES `investigasi_kontak`(`investigasi_kontak_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kasus_ternotif` ADD CONSTRAINT `kasus_ternotif_terduga_tbc_id_fkey` FOREIGN KEY (`terduga_tbc_id`) REFERENCES `terduga_tbc`(`terduga_tbc_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbc_ro` ADD CONSTRAINT `tbc_ro_kasus_ternotif_id_fkey` FOREIGN KEY (`kasus_ternotif_id`) REFERENCES `kasus_ternotif`(`kasus_ternotif_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tbc_so` ADD CONSTRAINT `tbc_so_kasus_ternotif_id_fkey` FOREIGN KEY (`kasus_ternotif_id`) REFERENCES `kasus_ternotif`(`kasus_ternotif_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `toc_ro` ADD CONSTRAINT `toc_ro_tbc_ro_id_fkey` FOREIGN KEY (`tbc_ro_id`) REFERENCES `tbc_ro`(`tbc_ro_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `verifikasi_data` ADD CONSTRAINT `verifikasi_data_tbc_ro_id_fkey` FOREIGN KEY (`tbc_ro_id`) REFERENCES `tbc_ro`(`tbc_ro_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `kegiatan_tbc_ro` ADD CONSTRAINT `kegiatan_tbc_ro_tbc_ro_id_fkey` FOREIGN KEY (`tbc_ro_id`) REFERENCES `tbc_ro`(`tbc_ro_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
