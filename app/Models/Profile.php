<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model {
    use HasFactory;
    protected $table = 'profile';
    protected $fillable = [
        'about_us',
        'visi',
        'misi',
        'quotes',
    ];
    protected $casts = [
        'misi' => 'array',
        'quotes' => 'array',
    ];
}
