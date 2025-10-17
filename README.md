<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

Berikut versi dokumentasi **setup untuk React + Inertia + Laravel** (tanpa Docker, pakai PHP 8.4 dan MySQL) dalam format yang sama seperti contohmu 👇

---

## How to Setup

## Prerequisites

* Node.js >= 22
* PNPM >= 10.15.1
* PHP >= 8.4
* MySQL >= 8.0
* Composer >= 2.7

---

## Getting Started

### 1. Install PHP & Node Dependencies

```bash
# Install PHP dependencies
composer install

# Install frontend dependencies
pnpm install
```

---

### 2. Environment Setup

Buat file `.env` dari template:

```bash
cp .env.example .env
```

Lalu sesuaikan konfigurasi database di `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nama_database
DB_USERNAME=root
DB_PASSWORD=
```

---

### 3. Generate Application Key

```bash
php artisan key:generate
```

---

### 4. Database Setup

Jalankan perintah berikut secara berurutan:

```bash
# Jalankan migrasi
php artisan migrate

# (Opsional) Seed database dengan data awal
php artisan db:seed
```

---

### 5. Build Frontend Assets

```bash
# Untuk pengembangan
pnpm dev

# Untuk build produksi
pnpm build
```

---

### 6. Start Development Server

Jalankan server Laravel:

```bash
php artisan serve
```

Aplikasi akan tersedia di [http://localhost:8000](http://localhost:8000)

---

## Available Scripts

* `pnpm dev` — Jalankan Vite dev server untuk pengembangan.
* `pnpm build` — Build aset frontend untuk produksi.
* `php artisan serve` — Jalankan server Laravel lokal.
* `php artisan migrate` — Jalankan migrasi database.
* `php artisan db:seed` — Jalankan seeder database.
* `php artisan migrate:fresh` — Reset seluruh tabel dan migrasi ulang.
* `php artisan storage:link` — Buat symbolic link untuk file storage.
* `php artisan route:list` — Lihat daftar semua route Laravel.
* `php artisan optimize` — Optimalkan autoloader dan konfigurasi cache.

---

## Access

* **Frontend (Inertia React)** → [http://localhost:8000](http://localhost:8000)
* **Backend (Laravel API)** → sama host dengan port 8000 (serve bawaan artisan).

---

## Development dengan Docker (opsional)

Jika kamu ingin menjalankan hanya database untuk pengembangan lokal tanpa menjalankan seluruh stack, ada file `docker-compose.dev.yaml` yang men-define Postgres dan Adminer.

Langkah singkat:

1. Jalankan Postgres + Adminer:

```bash
docker compose up -d
```

2. Buka Adminer di browser:

- URL: http://localhost:8081
- DB system: PostgreSQL
- Server: `genbi-psql` (jika memilih koneksi antar-container dari Adminer) — atau `localhost` jika mengakses Adminer dari host
- Username: `genbi_postgres`
- Password: `genbi_postgres`
- Database: `db_genbi`

3. Matikan services:

```bash
docker compose down
```

Catatan penting:

- Data Postgres disimpan di volume bernama `genbi_pgdata`, jadi data tetap bertahan saat container direcreate.
- Jika kamu sudah menggunakan `./pgdata` sebagai direktori host sebelumnya, data itu tidak otomatis dipindahkan ke volume bernama — beri tahu saya jika kamu butuh migrasi data.
- Jika ingin menjalankan seluruh aplikasi (PHP + Nginx + Postgres) gunakan `docker-compose.yaml` utama:

```bash
docker compose up -d --build
```

- Lokasi `php.ini` kustom yang dipasang ke container ada di `docker/php.ini`.

Jika mau, saya bisa menambahkan snippet README yang menjelaskan bagaimana menambahkan target `make` atau skrip npm/pnpm untuk menjalankan env dev ini lebih singkat.

Apakah kamu ingin saya tambahkan juga versi “production setup” (misalnya untuk deploy manual di VPS tanpa Docker)?
