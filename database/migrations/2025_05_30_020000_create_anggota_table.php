<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {

        Schema::create('anggota', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 200);
            $table->string('email', 200)->unique()->nullable();
            $table->string('phone', 15)->nullable();
            $table->string('fakultas', 200)->nullable();
            $table->string('prodi', 200)->nullable();
            $table->integer('semester')->nullable();
            $table->string('jabatan', 200)->nullable();
            $table->string('image', 100)->nullable();

            $table->unsignedInteger('divisi_id')->nullable();
            $table->foreign('divisi_id')
                ->references('id')
                ->on('divisi')
                ->onDelete('set null');

            $table->enum('status', ['active', 'inactive'])->default('active');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('anggota');
    }
};
