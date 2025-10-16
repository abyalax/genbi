<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class News extends Model {
    use HasFactory;
    protected $with = ['author'];
    protected $appends = ['author_name'];
    protected $hidden = ['author'];
    protected $fillable = [
        'title', 'description', 'slug', 'content', 'image',
        'author_id', 'meta_title', 'meta_description', 'meta_keywords', 'category'
    ];

    public function author() {
        return $this->belongsTo(Anggota::class, 'author_id')->select('id', 'name');
    }

    public function getAuthorNameAttribute() {
        return $this->author->name;
    }
}
