<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class NewsController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Inertia::render('news/NewsPage', [
            'news' => News::all()
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function adminIndex() {
        return Inertia::render('admin/news/NewsPage', [
            'news' => News::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {}

    /**
     * Display the specified resource.
     */
    public function show(string $slug) {
        return Inertia::render('news/DetailNewsPage', [
            'news' => News::where('slug','=', $slug)->first()
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function galleries() {
        return Inertia::render('gallery/GalleryPage', [
            'gallery' => DB::select("
                SELECT
                    news.image,
                    news.title,
                    news.created_at,
                    news.slug
                FROM
                    news
                ;
            ")
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {}

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {}

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {}
}
