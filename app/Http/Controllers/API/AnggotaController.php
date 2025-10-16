<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Models\Anggota;
use App\Models\User;
use Illuminate\Http\JsonResponse;

class AnggotaController extends Controller {

    public function update(Request $request, string $id) : JsonResponse {
        Log::debug($request);

        $anggota = Anggota::findOrFail($id);

        $anggota->name = $request->input('name');
        $anggota->email = $request->input('email');
        $anggota->phone = $request->input('phone');
        $anggota->fakultas = $request->input('fakultas');
        $anggota->prodi = $request->input('prodi');
        $anggota->semester = $request->input('semester');
        $anggota->jabatan = $request->input('jabatan');

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $filename = 'anggota_' . $anggota->id . '.' . $image->getClientOriginalExtension();
            $path = $image->storeAs('profile', $filename, 'public');
            $anggota->image = "/storage/$path";
        }

        $anggota->save();

        return response()->json([
            'message' => 'User updated successfully',
            'user' => $anggota
        ]);
    }

    public function getIdsName(): JsonResponse {
        return response()->json(User::onlyIdName()->get());
    }
}
