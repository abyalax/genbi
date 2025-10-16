<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Database\Seeders\Agenda;
use Database\Seeders\Anggota;
use Database\Seeders\News;
use Database\Seeders\Divisi;
use Database\Seeders\AgendaParticipants;
use Database\Seeders\Users;
use Database\Seeders\Profile;

class DatabaseSeeder extends Seeder {
    /**
     * Seed the application's database.
     */
    public function run(): void {
        $this->call([
            Users::class,
            Divisi::class,
            Anggota::class,
            News::class,
            Agenda::class,
            AgendaParticipants::class,
            Profile::class
        ]);
    }
}
