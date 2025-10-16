<?php

namespace Database\Seeders;

use App\Models\Profile as ModelsProfile;
use Illuminate\Database\Seeder;

class Profile extends Seeder {
    /**
     * Run the database seeds.
     */
    public function run(): void {
        ModelsProfile::create([
            'about_us' => 'Generasi Baru Indonesia (GenBi) adalah komunitas mahasiswa penerima beasiswa Bank Indonesia yang didirikan pada 11 November 2011. GenBi berperan sebagai Frontliners Bank Indonesia, berfokus pada pemberdayaan masyarakat untuk pembangunan berkelanjutan. GenBi aktif di tingkat kampus, regional, dan nasional. Universitas Islam Kadiri-Kediri (UNISKA) menjadi mitra dalam program ini mulai tahun 2024. GenBi UNISKA telah merencanakan berbagai program yang bermanfaat bagi masyarakat, mengembangkan kepekaan sosial, softskill, hardskill, dan jiwa kepemimpinan anggotanya untuk menciptakan pemimpin masa depan.',
            'visi' => 'Terwujudnya generasi baru Indonesia yang aktif, responsif, dan konstruktif dalam gerakan, pengabdian, pelayanan serta pengembangan minat dan bakat mahasiswa untuk GENBI UNISKA dan Indonesia.',
            'misi' => [
                'Terwujudnya generasi baru Indonesia yang aktif, responsif, dan konstruktif dalam gerakan, pengabdian, pelayanan serta pengembangan minat dan bakat mahasiswa untuk GENBI UNISKA dan Indonesia.',
                'Mengoptimalkan pengembangan future leaders GenBi Universitas Islam Kadiri dengan program kerja yang efektif dan berkualitas.',
                'Mengadakan program kerja dengan turut aktif membersamai masyarakat dan generasi muda bangsa, yang bersifat responsif terhadap isu-isu yang berkembang.',
                'Menciptakan optimalisasi lingkungan komunitas dengan meningkatkan intelektualitas, profesionalitas, tanggung jawab terhadap visi misi GenBi.'
            ],
            'quotes' => [
                "GenBI: Energi untuk Negeri.",
                "Bersama GenBI, wujudkan generasi unggul Indonesia.",
                "Muda, berprestasi, dan berdedikasi bersama GenBI.",
                "GenBI: Inspirasi bagi perubahan positif.",
                "Berkolaborasi untuk Indonesia yang lebih baik dengan GenBI.",
                "GenBI: Membangun masa depan melalui pendidikan dan aksi nyata.",
                "Generasi Baru Indonesia, siap menghadapi tantangan global.",
                "GenBI: Sinergi pemuda untuk kemajuan bangsa.",
                "Bersama GenBI, raih mimpi dan kontribusi untuk negeri.",
                "GenBI: Komunitas pemimpin masa depan Indonesia."
            ]
        ]);
    }
}
