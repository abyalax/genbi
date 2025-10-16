<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\News;

class NewsController extends Controller {
    public function create(Request $request): JsonResponse {
        $path = null;

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = $request->input('slug') . '.' . $image->getClientOriginalExtension();
            $path = $image->storeAs('news', $filename, 'public');
        }

        News::create([
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'slug' => $request->input('slug'),
            'content' => $request->input('content'),
            'image' =>  "/storage/$path",
            'author_id' => $request->input('author_id'),
            'meta_title' => $request->input('meta_title'),
            'meta_description' => $request->input('meta_description'),
            'meta_keywords' => $request->input('meta_keywords'),
            'category' => $request->input('category'),
        ]);

        return response()->json([
            'message' => 'News created successfully',
        ]);
    }
}
