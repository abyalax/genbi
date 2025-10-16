<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Divisi;

class Anggota extends Model {
    use HasFactory;
    protected $table = 'anggota';
    protected $fillable = [
        'name',
        'email',
        'phone',
        'fakultas',
        'prodi',
        'semester',
        'jabatan',
        'divisi_id',
        'status',
    ];

    public function divisi() {
        return $this->hasOne(Divisi::class, 'divisi_id', 'id');
    }

    public function news() {
        return $this->hasMany(News::class, 'anggota_id', 'id');
    }
}
