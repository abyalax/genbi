<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <main style="font-family: Calibri, 'Trebuchet MS', sans-serif;width: 100vw;">
        <h1 style="text-align: center">
            Agenda Kegiatan Organisasi GENBI
            <br>
            Universitas Islam Kadiri-Kediri
            <br>
            {{ date('Y') }}
        </h1>

        <p>{{ $exportAgendas['updated_at'] }} WIB</p>
        <table style="border-collapse: collapse; margin: 0;">
            <thead style="padding: 10px;">
                <th style="border: 1px solid black; text-align: center; padding: 4px 10px;">Hari/Tanggal Waktu</th>
                <th style="border: 1px solid black; text-align: center; padding: 4px 10px;">Kegiatan</th>
                <th style="border: 1px solid black; text-align: center; padding: 4px 10px;">Tempat</th>
                <th style="border: 1px solid black; text-align: center; padding: 4px 10px;">Keterangan</th>
            </thead>
            <tbody>
                @forelse ($exportAgendas['agendas'] as $agenda)
                <tr >
                    <td style="border: 1px solid black; padding: 6px 10px; text-align: center;">
                        {{ $agenda->date }}
                    </td>
                    <td style="border: 1px solid black; padding: 6px 10px;">{{ $agenda->title }}</td>
                    <td style="border: 1px solid black; padding: 6px 10px;">{{ $agenda->location }}</td>
                    <td style="border: 1px solid black; padding: 6px 10px;">{{ $agenda->description }}</td>
                </tr>
                @empty
                <td colspan="5">No Agenda Available</td>
                @endforelse
            </tbody>
        </table>
        <div style="margin: 10px 0 0 0px ; display: flex; flex-direction: column; gap: 5px;">
            <h4 style="margin-top: 10px;">Ketua Organisasi</h4>
            <h4 style="margin-top: 0;margin-bottom: 70px;">TTD</h4>

            <b>{{ $exportAgendas['ketua'] }}</b>
        </div>

    </main>
</body>
</html>
