<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Anggota;
use Illuminate\Http\Request;
use Inertia\Inertia;
// use Illuminate\View\View;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Carbon;

class AgendaController extends Controller {
    /**
     * Display a listing of the resource.
     */
    public function index() {
        return Inertia::render('agenda/AgendaPage');
    }

    public function adminIndex() {
        return Inertia::render('admin/agenda/AgendaPage', [
            'agenda' => Agenda::all()
        ]);
    }

    public function export() {
        $agendas = Agenda::where('end', '>', Carbon::now())
            ->orderBy('start', 'asc')
            ->take(5)
            ->get();
        $ketua = Anggota::where('jabatan', 'Ketua')->first();
        $today = Carbon::now();
        $exportAgendas = [
            'updated_at' => $today->translatedFormat('l, d F Y H:i'),
            'agendas' => $agendas,
            'ketua' => $ketua->name
        ];
        // return view('exports.agenda', compact('exportAgendas'));
        $pdf = Pdf::loadView('exports.agenda', compact('exportAgendas'))->setPaper('a4', 'landscape');
        return $pdf->download('agenda-kegiatan.pdf');
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
    public function show(Agenda $agenda) {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Agenda $agenda) {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Agenda $agenda) {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Agenda $agenda) {
        //
    }
}
