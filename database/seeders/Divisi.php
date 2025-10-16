<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class divisi extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        DB::statement("
            INSERT INTO
                divisi
            VALUES
                (1, 'Komunikasi dan Informasi', 7, NULL, NULL),
                (2, 'Internasionalisasi', 14, NULL, NULL),
                (3, 'Pendidikan', 28, NULL, NULL),
                (4, 'Lingkungan Hidup', 29, NULL, NULL),
                (5, 'Pengabdian Masyarakat', 37, NULL, NULL),
                (6, 'Kewirausahaan', 44, NULL, NULL)
            ;
        ");
    }
}
