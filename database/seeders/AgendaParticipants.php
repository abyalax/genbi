<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AgendaParticipants extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        $agendaIds = DB::table('agenda')->pluck('id')->toArray();

        if (empty($agendaIds)) {
            $this->command->warn("Tidak ada data agenda untuk dihubungkan.");
            return;
        }

        $usedCombinations = [];

        for ($i = 0; $i < 100; $i++) {
            $agenda_id = $agendaIds[array_rand($agendaIds)];
            $participant_id = rand(1, 50); // karena hanya sampai 50 anggota

            $comboKey = "$agenda_id-$participant_id";

            // Hindari duplikat kombinasi agenda dan participant
            if (in_array($comboKey, $usedCombinations)) {
                continue;
            }

            DB::table('agenda_participants')->insert([
                'agenda_id' => $agenda_id,
                'participant_id' => $participant_id,
                'created_at' => now(),
                'updated_at' => now(),
            ]);

            $usedCombinations[] = $comboKey;
        }
    }
}
