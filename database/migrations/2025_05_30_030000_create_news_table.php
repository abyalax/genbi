<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void {
        Schema::create('news', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', length: 100);
            $table->text('description')->nullable();
            $table->string('slug', length: 200)->unique();
            $table->text('content')->nullable();
            $table->string('image', length: 50)->nullable();
            $table->unsignedInteger('author_id')->nullable();
            $table->foreign('author_id')
                ->references('id')
                ->on('anggota')
                ->onDelete('set null');
            $table->string('meta_title')->nullable();
            $table->string('meta_description')->nullable();
            $table->string('meta_keywords', length: 100)->nullable();
            $table->string('category', length: 100)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void {
        Schema::dropIfExists('news');
    }
};
