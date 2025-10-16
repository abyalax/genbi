'use client';

import AOS from 'aos';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { BPH, Kepengurusan } from '~/services/pengurus/type';
import { BPHDesktop } from './bph-dekstop';
import { BPHMobile } from './bph-mobile';

interface ProfilePageProps {
  Kepengurusan?: Kepengurusan;
  BPH?: BPH;
}

export const PageProfile: FC<ProfilePageProps> = ({ BPH, Kepengurusan }) => {
  const { push } = useRouter();
  const { ketua, wakilKetua, sekretaris, bendahara } = Kepengurusan ?? {}
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  console.log({ BPH }, { Kepengurusan });

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 230,
      once: false,
    });
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 950) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  return (
    <>
      <h2 className="ml:text-3xl sm:text-2xl text-xl font-semibold text-[#1C8383] text-center mb-12">Get To Know About Us</h2>

      <section className="lg:grid lg:grid-cols-2 mml:flex mml:flex-col gap-6 text-gray-800 px-6 sm:px-10 lg:px-32">
        <div className="mml:col-span-1 sm:w-full flex gap-1" data-aos="fade-right">
          <Image src={'/assets/img/rapat.jpg'} width={500} height={500} alt="/assets/img/rapat.jpg" className=" w-2/3 rounded object-cover object-center" />
          <Image src={'/assets/img/rektor.jpg'} width={500} height={500} alt="/assets/img/rektor.jpg" className="w-1/3 rounded object-cover object-center" />
        </div>
        <div className="sm:w-full mml:col-span-1 " data-aos="fade-left">
          <h2 className="text-lg sm:text-xl mml:text-2xl xxs:text-center mml:text-start font-semibold mb-4">
            Kami adalah Generasi Baru Indonesia Universitas Islam Kadiri-Kediri
          </h2>
          <p className="text-justify text-sm sm:text-base">
            Generasi Baru Indonesia (GenBi) adalah komunitas mahasiswa penerima beasiswa Bank Indonesia yang didirikan pada 11 November 2011. GenBi berperan
            sebagai Frontliners Bank Indonesia, berfokus pada pemberdayaan masyarakat untuk pembangunan berkelanjutan. GenBi aktif di tingkat kampus, regional,
            dan nasional.
            <br />
            Universitas Islam Kadiri-Kediri (UNISKA) menjadi mitra dalam program ini mulai tahun 2024. GenBi UNISKA telah merencanakan berbagai program yang
            bermanfaat bagi masyarakat, mengembangkan kepekaan sosial, softskill, hardskill, dan jiwa kepemimpinan anggotanya untuk menciptakan pemimpin masa
            depan.
          </p>
        </div>
      </section>

      <h2 className="ml:text-3xl sm:text-2xl text-xl font-semibold text-[#1C8383] text-center my-12">Struktur Organisasi</h2>

      <main className="flex flex-col justify-start items-center">
        {/* KEPENGURUSAN */}

        <div className="flex gap-1 bg-[#1C8383] text-white sm:p-2 p-1.5 sm:rounded-full rounded-xl">
          <Image src={'/assets/dummy/1.jpg'} width={500} height={500} alt="dummy jpg" className="rounded-full w-14 h-14 object-cover object-center" />
          <div onClick={() => push(`/profile/${ketua?.[0].id}`)} className="cursor-pointer">
            <h2 className="font-semibold">{ketua?.[0].name}</h2>
            <p className="font-light">Ketua Organisasi</p>
          </div>
        </div>

        <div className="flex justify-center">
          <span className="h-10 w-0 border border-gray-500 mx-auto" />
        </div>

        <div className="flex gap-1 bg-[#1C8383] text-white sm:p-2 p-1.5 sm:rounded-full rounded-xl">
          <Image src={'/assets/dummy/2.jpg'} width={500} height={500} alt="/assets/dummy/2.jpg" className="rounded-full w-14 h-14 object-cover object-center" />
          <div className="cursor-pointer" onClick={() => push(`/profile/${wakilKetua?.[0].id}`)}>
            <h2 className="font-semibold">{wakilKetua?.[0].name}</h2>
            <p className="font-light">Wakil Ketua Organisasi</p>
          </div>
        </div>

        <div className="flex justify-center">
          <span className="h-10 w-0 border border-gray-500 mx-auto" />
        </div>

        <div className="flex justify-center w-full">
          <span className="h-0 w-full border border-gray-500 mx-auto" />
        </div>

        <div className="flex justify-around w-full">
          <span className="h-10 w-0 border border-gray-500 mx-auto" />
          <span className="h-10 w-0 border border-gray-500 mx-auto" />
        </div>
        <div className="flex justify-around w-full">
          <div className="flex flex-col gap-1">
            <h2 className="text-center text-lg font-semibold">Sekretaris</h2>
            <div className="flex gap-1 bg-[#1C8383] text-white py-2 pl-2 pr-4 sm:rounded-full rounded-xl">
              <Image
                src={'/assets/dummy/3.jpg'}
                width={500}
                height={500}
                alt="/assets/dummy/3.jpg"
                className="rounded-full w-14 h-14 object-cover object-center"
              />
              <div className="cursor-pointer" onClick={() => push(`/profile/${sekretaris?.find((e) => e.jabatan === 'Sekretaris 1')?.id}`)}>
                <h2 className="font-semibold text-nowrap">{sekretaris?.find((e) => e.jabatan === 'Sekretaris 1')?.name}</h2>
                <p className="font-light text-nowrap">Sekretaris 1</p>
              </div>
            </div>
            <div className="flex gap-1 bg-[#1C8383] text-white py-2 pl-2 pr-4 sm:rounded-full rounded-xl">
              <Image
                src={'/assets/dummy/4.jpg'}
                width={500}
                height={500}
                alt="/assets/dummy/4.jpg"
                className="rounded-full w-14 h-14 object-cover object-center"
              />
              <div className="cursor-pointer" onClick={() => push(`/profile/${sekretaris?.find((e) => e.jabatan === 'Sekretaris 2')?.id}`)}>
                <h2 className="font-semibold text-nowrap">{sekretaris?.find((e) => e.jabatan === 'Sekretaris 2')?.name}</h2>
                <p className="font-light text-nowrap">Sekretaris 2</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="text-center text-lg font-semibold">Bendahara</h2>
            <div className="flex gap-1 bg-[#1C8383] text-white py-2 pl-2 pr-4 sm:rounded-full rounded-xl">
              <Image
                src={'/assets/dummy/5.jpg'}
                width={500}
                height={500}
                alt="/assets/dummy/5.jpg"
                className="rounded-full w-14 h-14 object-cover object-center"
              />
              <div className="cursor-pointer" onClick={() => push(`/profile/${bendahara?.find((e) => e.jabatan === 'Bendahara 1')?.id}`)}>
                <h2 className="font-semibold text-nowrap">{bendahara?.find((e) => e.jabatan === 'Bendahara 1')?.name}</h2>
                <p className="font-light text-nowrap">Bendahara 1</p>
              </div>
            </div>
            <div className="flex gap-1 bg-[#1C8383] text-white py-2 pl-2 pr-4 sm:rounded-full rounded-xl">
              <Image
                src={'/assets/dummy/6.jpg'}
                width={500}
                height={500}
                alt="/assets/dummy/6.jpg"
                className="rounded-full w-14 h-14 object-cover object-center"
              />
              <div className="cursor-pointer" onClick={() => push(`/profile/${bendahara?.find((e) => e.jabatan === 'Bendahara 2')?.id}`)}>
                <h2 className="font-semibold text-nowrap">{bendahara?.find((e) => e.jabatan === 'Bendahara 2')?.name}</h2>
                <p className="font-light text-nowrap">Bendahara 2</p>
              </div>
            </div>
          </div>
        </div>
        {isSmallScreen ? <BPHMobile BPH={BPH} /> : <BPHDesktop BPH={BPH} />}
      </main>
    </>
  );
};
