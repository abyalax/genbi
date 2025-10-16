<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Agenda extends Model {
    use HasFactory;
    protected $table = 'agenda';
    protected $fillable = ['title', 'description', 'location', 'start', 'end'];
    public $timestamps = TRUE;
    protected $appends = ['start_date', 'end_date'];

    protected $casts = [
        'start' => 'datetime',
        'end' => 'datetime',
    ];

    public function participants() {
        return $this->belongsToMany(Anggota::class, 'agenda_participants', 'agenda_id', 'participant_id');
    }

    public function getStartDateAttribute() {
        return $this->start ? $this->start->translatedFormat('l, d F Y H:i') : null;
    }

    public function getEndDateAttribute() {
        return $this->end ? $this->end->translatedFormat('l, d F Y H:i') : null;
    }

    public function getDateAttribute() {
        $start = Carbon::parse($this->start);
        $end = Carbon::parse($this->end);
        if ($start->isSameDay($end)) {
            return $start->translatedFormat('l, d F Y') . ' ' . $start->format('H:i') . ' - ' . $end->format('H:i') . ' WIB';
        } else {
            return $start->translatedFormat('d') . ' - ' . $end->translatedFormat('d F Y');
        }
    }

    // public function getCreatedAtAttribute() {
    //     return $this->created_at ? $this->created_at->diffForHumans() : null;
    // }

    // public function getUpdatedAtAttribute() {
    //     return $this->updated_at ? $this->updated_at->diffForHumans() : null;
    // }
}
