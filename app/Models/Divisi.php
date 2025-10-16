<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Divisi extends Model {
    use HasFactory;
    protected $table = 'divisi';
    protected $fillable = ['name', 'visi', 'misi', 'leader_id'];

    // Relasi ke leader (anggota khusus)
    public function leader() {
        return $this->belongsTo(Anggota::class, 'leader_id');
    }

    // (termasuk leader)
    public function anggota() {
        return $this->hasMany(Anggota::class, 'divisi_id');
    }

    // anggota BUKAN leader
    public function anggotaReguler() {
        return $this->hasMany(Anggota::class, 'divisi_id')->where('id', '!=', $this->leader_id);
    }
}
