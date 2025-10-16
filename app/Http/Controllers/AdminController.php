<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller {
    /**
     * Display the user's profile form.
     */
    public function index(Request $request): Response {
        return Inertia::render('admin/page', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }
    /**
     * Display the profile form.
     */
    public function profile(Request $request): Response {
        $ketua = DB::select("SELECT * FROM anggota WHERE jabatan = 'Ketua';");
        $wakilKetua = DB::select("SELECT * FROM anggota WHERE jabatan = 'Wakil Ketua'");
        $sekretaris = DB::select("SELECT * FROM anggota WHERE jabatan LIKE 'Sekretaris%'");
        $bendahara = DB::select("SELECT * FROM anggota WHERE jabatan LIKE 'Bendahara%'");

        $bph = [
            'kominfo' => [
                'ketua' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 1 AND jabatan = 'Chief Operating'",
                )[0],
                'anggota' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 1 AND jabatan != 'Chief Operating'",
                )
            ],
            'internasionalisasi' => [
                'ketua' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 2 AND jabatan = 'Chief Operating'",
                )[0],
                'anggota' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 2 AND jabatan != 'Chief Operating'",
                )
            ],
            'pendidikan' => [
                'ketua' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 3 AND jabatan = 'Chief Operating'",
                )[0],
                'anggota' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 3 AND jabatan != 'Chief Operating'",
                )
            ],
            'lingkungan' => [
                'ketua' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 4 AND jabatan = 'Chief Operating'",
                )[0],
                'anggota' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 4 AND jabatan != 'Chief Operating'",
                )
            ],
            'pengabdian' => [
                'ketua' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 5 AND jabatan = 'Chief Operating'",
                )[0],
                'anggota' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 5 AND jabatan != 'Chief Operating'",
                )
            ],
            'kewirausahaan' => [
                'ketua' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 6 AND jabatan = 'Chief Operating'",
                )[0],
                'anggota' => DB::select(
                    "SELECT * FROM anggota WHERE divisi_id = 6 AND jabatan != 'Chief Operating'",
                )
            ],
        ];

        $kepengurusan = [
            'ketua' => $ketua,
            'wakilKetua' => $wakilKetua,
            'sekretaris' => $sekretaris,
            'bendahara' => $bendahara
        ];

        return Inertia::render('admin/profile/ProfilePage', [
            'kepengurusan' => $kepengurusan,
            'bph' => $bph
        ]);
    }
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response {
        return Inertia::render('admin/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('admin.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
