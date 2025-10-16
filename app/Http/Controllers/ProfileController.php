<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use App\Models\Divisi;

class ProfileController extends Controller {

    /**
     * Display a listing of the resource.
     */
    public function index() {
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

        return Inertia::render('profile/ProfilePage', [
            'kepengurusan' => $kepengurusan,
            'bph' => $bph
        ]);
    }
    /**
     * Display a listing of the resource.
     */
    public function adminIndex() {
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

    public function divisi(string $id) {
        return Inertia::render('profile/DivisiID', [
            'divisi' => Divisi::with(['leader', 'anggotaReguler'])->find($id)
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create() {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id) {
        //
    }
}
