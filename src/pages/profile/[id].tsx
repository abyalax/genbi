import Footer from '@/component/footer';
import Navbar from '@/component/navbar'
import { Anggota, getAnggotaByID } from '@/services/anggota';
import { validateImageExtension } from '@/utils/utils';
import Head from 'next/head'
import Image from 'next/image';
import React from 'react'

export async function getServerSideProps({ params }: { params: { id: number } }) {
    const anggota = await getAnggotaByID(params.id)
    return {
        props: { anggota },
    };
}

const DetailAnggota = ({ anggota }: { anggota: Anggota[] }) => {
    console.log({ anggota });
    return (
        <>
            <Head>
                <title>GENBI UNISKA - Profile</title>
                <meta name="description" content="Temukan informasi lengkap tentang Generasi Baru Indonesia Universitas Islam Kadiri. Dapatkan informasi tentang kegiatan, anggota, dan kontak kami." />
            </Head>
            <main>
                <Navbar />
                <section className='pt-28 px-16'>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className="text-3xl font-bold text-[#1C8383] text-center mb-6">{anggota[0].name}</h2>

                        <div className='my-6'>
                            {anggota[0].image !== undefined && validateImageExtension(anggota[0].image) ? (
                                <Image alt={`${anggota[0].name} image`} src={anggota[0].image} width={400} height={400} className='w-64 h-64 mx-auto object-cover object-center rounded-full' />
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
                                <p>: {anggota[0].jabatan}</p>
                                <p>: {anggota[0].fakultas}</p>
                                <p>: {anggota[0].prodi}</p>
                                <p>: {anggota[0].semester}</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default DetailAnggota
