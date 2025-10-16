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

Apakah kamu ingin saya tambahkan juga versi “production setup” (misalnya untuk deploy manual di VPS tanpa Docker)?
