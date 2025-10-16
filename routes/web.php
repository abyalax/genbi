<?php

use App\Http\Controllers\LandingPageController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\AgendaController;
use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use App\Http\Controllers\GalleryController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [LandingPageController::class, 'index']);
Route::get('/news', [NewsController::class, 'index']);
Route::get('/news/{slug}', [NewsController::class, 'show']);
Route::get('/gallery', [NewsController::class, 'galleries']);
Route::get('/profile', [ProfileController::class, 'index']);
Route::get('/profile/divisi/{id}', [ProfileController::class, 'divisi']);
Route::get('/profile/{id}', [AnggotaController::class, 'show']);
Route::get('/agenda', [AgendaController::class, 'index']);
Route::get('/agenda/export', [AgendaController::class, 'export'])->name('agenda.export');

Route::middleware(['auth', 'verified'])->group(function () {

    Route::get('/tokens/create', [AuthController::class, 'create']);

    Route::prefix('admin')->group(function () {
        Route::get('/', [AdminController::class, 'index'])->name('admin');
        Route::get('/edit', [AdminController::class, 'edit'])->name('admin.edit');
        Route::patch('/update', [AdminController::class, 'update'])->name('admin.update');
        Route::delete('/destroy', [AdminController::class, 'destroy'])->name('admin.destroy');
        // Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])->name('logout');

        Route::get('/news', [NewsController::class, 'adminIndex'])->name('admin.news');
        Route::get('/agenda', [AgendaController::class, 'adminIndex'])->name('admin.agenda');
        Route::get('/gallery', [GalleryController::class, 'index'])->name('admin.gallery');
        Route::get('/profile', [ProfileController::class, 'adminIndex'])->name('admin.profile');
        Route::get('/profile/{id}', [AnggotaController::class, 'edit'])->name('admin.profile.edit');
    });
});

require __DIR__ . '/auth.php';
