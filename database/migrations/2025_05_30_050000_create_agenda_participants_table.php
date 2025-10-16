<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('agenda_participants', function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedInteger('agenda_id');
            $table->foreign('agenda_id')
                ->references('id')
                ->on('agenda')
                ->onDelete('cascade')
                ->onUpdate('cascade');

            $table->unsignedInteger('participant_id');
            $table->foreign('participant_id')
                ->references('id')
                ->on('anggota')
                ->onDelete('restrict')
                ->onUpdate('cascade');

            $table->index('agenda_id');
            $table->index('participant_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('AgendaParticipants');
    }
};
