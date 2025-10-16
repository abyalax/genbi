import Footer from "@/components/fragments/footer";
import Navbar from "@/components/fragments/navbar";
import { validateImageExtension } from "@/lib";
import { Anggota } from "@/types/anggota";
import { Head } from "@inertiajs/react";

export default function DetailAnggotaPage({ anggota }: { anggota: Anggota }) {
    console.log({ anggota });
    return (
        <>
            <Head>
                <title>GENBI UNISKA - Profile</title>
                <meta name="description" content="Temukan informasi lengkap tentang Generasi Baru Indonesia Universitas Islam Kadiri. Dapatkan informasi tentang kegiatan, anggota, dan kontak kami." />
            </Head>
            <main>
                <Navbar />
                <section className='pt-28 px-16 min-h-[75vh]'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className="text-3xl font-bold text-[#1C8383] text-center mb-6">{anggota.name}</h2>

                        <div className='my-6'>
                            {anggota.image !== undefined && validateImageExtension(anggota.image as string) ? (
                                <img alt={`${anggota.name} image`} src={anggota.image as string} width={400} height={400} className='w-64 h-64 mx-auto object-cover object-center rounded-full' />
                            ) : (
                                null
                            )}
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <p className='w-40 text-lg font-semibold'>Posisi</p>
                                <p className='w-40 text-lg font-semibold'>Fakultas</p>
                                <p className='w-40 text-lg font-semibold'>Prodi</p>
                                <p className='w-40 text-lg font-semibold'>Semester</p>
                            </div>

                            <div className='flex flex-col'>
                                <p>: {anggota.jabatan}</p>
                                <p>: {anggota.fakultas}</p>
                                <p>: {anggota.prodi}</p>
                                <p>: {anggota.semester}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}
