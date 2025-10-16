<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Agenda as ModelAgenda;
use Illuminate\Support\Carbon;

class Agenda extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {

        ModelAgenda::insert([
            [
                'title' => 'Temu Responden Bank Indonesia dengan GenBI Uniska dan genbiers lain',
                'description' => 'Temu Responden, BI Upayakan Bangun Ekonomi Berkelanjutan.',
                'location' => 'Hotel Insumo Kediri Convention Center ( IKCC )',
                'start' => Carbon::create(2025, 7, 9, 8, 0, 0),
                'end' => Carbon::create(2025, 7, 9, 12, 0, 0),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Operasi Pasar Murni',
                'description' => 'Pengendalian Inflasi Daerah Kota Kediri',
                'location' => 'Kelurahan Tamanan, Ngronggo Sport Center, Kelurahan Ketami',
                'start' => Carbon::create(2025, 7, 11, 7, 0, 0),
                'end' => Carbon::create(2025, 7, 11, 12, 0, 0),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Operasi Pasar Murni',
                'description' => 'Pengendalian Inflasi Daerah Kota Kediri',
                'location' => 'Kelurahan Banjarmlati, Kelurahan Setono Pande, Kelurahan Pesantren',
                'start' => Carbon::create(2025, 7, 12, 7, 0, 0),
                'end' => Carbon::create(2025, 7, 12, 12, 0, 0),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Operasi Pasar Murni',
                'description' => 'Pengendalian Inflasi Daerah Kota Kediri',
                'location' => 'Kelurahan Lirboyo, Kelurahan Baslowerti, Kelurahan Bangsal',
                'start' => Carbon::create(2025, 7, 13, 7, 0, 0),
                'end' => Carbon::create(2025, 7, 13, 12, 0, 0),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'title' => 'Operasi Pasar Murni',
                'description' => 'Pengendalian Inflasi Daerah Kota Kediri',
                'location' => 'Kelurahan Bandarlor, Kelurahan Semampir, Kelurahan Burengan',
                'start' => Carbon::create(2025, 7, 14, 7, 0, 0),
                'end' => Carbon::create(2025, 7, 14, 12, 0, 0),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
