<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AnggotaController;
use App\Http\Controllers\API\NewsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', fn(Request $request) => $request->user());
    Route::post('/tokens/revoke', function (Request $request) {
        $request->user()->tokens()->delete();
        return response()->json(['message' => 'Logged out successfully']);
    });
});

// Protected Routes
Route::middleware('auth:sanctum')->group(function () {
    Route::prefix('admin')->group(function () {

        Route::post('/news', [NewsController::class, 'create']);

        Route::get('/anggota/name', [AnggotaController::class, 'getIdsName']);

        Route::patch('/profile/{id}', [AnggotaController::class, 'update']);
    });
    // Tambahkan routes protected lainnya di sini
});
