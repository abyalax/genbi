'use client';

import AOS from 'aos';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { FC, FormEvent, useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { assets } from '~/assets';
import { Button } from '~/components/ui/button';
import { Footer } from '~/components/ui/footer';
import { Input } from '~/components/ui/input';
import { Navbar } from '~/components/ui/navbar';
import { Textarea } from '~/components/ui/textarea';
import { TypingAnimation } from '~/components/ui/typing';
import { H2, H3, H4, P } from '~/components/ui/typography';
import { news, quotes } from '~/db/mock';
import { cn } from '~/lib/utils';
import { navigationGuest } from '../navigation';
import { Section } from './ui/section';

export const PageLanding: FC = () => {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 230,
      once: false,
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [formState, setForm] = useState({
    to_name: 'GENBI KOMINFO UNISKA',
    from_name: '',
    from_email: '',
    from_phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ news });
  };

  return (
    <main className="min-h-screen px-0">
      <Navbar navigation={navigationGuest} />
      {visible && (
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="fixed bottom-10 right-10 p-2 rounded-full"
        >
          <FaChevronUp size={28} color="white" />
        </Button>
      )}

      <section className="my-6 text-center">
        <div data-aos="fade-up" className="sm:px-8 px-4 mx-auto w-3/4 md:px-16">
          <H2 className="font-semibold text-center text-primary">Selamat datang di website GenBI UNISKA Kediri</H2>
          <div className="font-semibold mb-4 w-fit mx-auto">
            <TypingAnimation className="text-center text-2xl" text={quotes} speed={80} delay={2000} />
          </div>
          <P className="text-primary">
            Generasi Baru Indonesia (GenBI) adalah komunitas mahasiswa penerima beasiswa Bank Indonesia yang tersebar di seluruh Indonesia.
          </P>
        </div>
      </section>

      <section>
        <div className="flex justify-center w-full" data-aos="fade-up">
          <Image
            src={assets.img.HomePage}
            alt="/assets/img/homepage.jpg"
            width={1000}
            height={600}
            className="w-3/4 h-[50vh] rounded-xl object-cover object-center"
          />
        </div>
      </section>

      {/* SINGKAT TENTANG KITA */}
      <Section title="About Us">
        <section className="lg:grid lg:grid-cols-2 flex flex-col gap-6 px-6 sm:px-14 lg:px-32 ">
          <div className="col-span-1 sm:w-full flex gap-1" data-aos="fade-right">
            <Image src={assets.img.Rapat} alt="/assets/img/rapat.jpg" width={600} height={600} className=" w-2/3 rounded object-cover object-center" />
            <Image src={assets.img.Rektor} alt="/assets/img/rektor.jpg" width={800} height={600} className="w-1/3 rounded object-cover object-center" />
          </div>
          <div className="sm:w-full col-span-1 " data-aos="fade-left">
            <H2 className="text-primary">Kami adalah Generasi Baru Indonesia Universitas Islam Kadiri-Kediri</H2>
            <P className="text-justify text-primary">
              Generasi Baru Indonesia (GenBi) adalah komunitas mahasiswa penerima beasiswa Bank Indonesia yang didirikan pada 11 November 2011. GenBi berperan
              sebagai Frontliners Bank Indonesia, berfokus pada pemberdayaan masyarakat untuk pembangunan berkelanjutan. GenBi aktif di tingkat kampus,
              regional, dan nasional. Universitas Islam Kadiri-Kediri (UNISKA) menjadi mitra dalam program ini mulai sejak November 2024. GenBi UNISKA telah
              merencanakan berbagai program yang bermanfaat bagi masyarakat, mengembangkan kepekaan sosial, softskill, hardskill, dan jiwa kepemimpinan
              anggotanya untuk menciptakan pemimpin masa depan.
            </P>
          </div>
        </section>
      </Section>

      {/* VISI DAN MISI */}
      <Section title="Our Vision and Mission">
        <div className="flex flex-row justify-center px-0 lg:px-16 items-center gap-10 mb-28">
          <div className="w-1/2" data-aos="fade-right">
            <div
              className={cn(
                'relative p-20 bg-gradient-to-r from-[#1C8383] to-green-50',
                'rounded-tl-[90rem] rounded-tr-[60rem] rounded-br-[20rem] rounded-bl-[28rem]',
                'sm:pl-6 sm:pr-0 sm:pt-5 xs:pl-4 xs:pr-0 xs:pt-3 xs:pb-2 xl:pl-12 xl:pr-2 xl:pt-10 pl-6 pr-1 pt-5',
              )}
            >
              <div className="absolute min-h-36 min-w-36 xs:min-w-32 xs:min-h-32 xs:min-w-28 xs:min-h-28 top-20 left-48 transform -translate-x-1/2 -translate-y-1/2 bg-background rounded-full shadow-2xl flex flex-col justify-center items-center z-50">
                <H2 className="text-primary font-mono">2025</H2>
                <P className="text-primary text-wrap">GENBI UNISKA</P>
              </div>
              <div className="relative w-full h-full">
                <Image
                  alt="Foto bareng"
                  src={assets.img.Fotbar}
                  width={800}
                  height={500}
                  className="object-cover rounded-tl-[90rem] rounded-tr-[60rem] rounded-br-[20rem] rounded-bl-[28rem] w-full h-auto"
                />
                <div className="absolute rounded-tl-[90rem] rounded-tr-[60rem] rounded-br-[20rem] rounded-bl-[28rem] inset-0 bg-gradient-to-t scale-105 from-black/10 to-transparent"></div>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col gap-5">
            <div data-aos="fade-up">
              <H4 className="text-primary">Who We Are</H4>
              <H2 className="font-serif text-primary">Our Vision</H2>
              <P className="text-justify text-primary">
                Terwujudnya generasi baru Indonesia yang aktif, responsif, dan konstruktif dalam gerakan, pengabdian, pelayanan serta pengembangan minat dan
                bakat mahasiswa untuk GENBI UNISKA dan Indonesia.
              </P>
            </div>
            <div data-aos="fade-up" className="text-primary">
              <H2 className="font-serif text-primary">Our Mission</H2>
              <ul className="text-justify">
                <li className="flex gap-2 justify-center items-start ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    strokeWidth={2}
                    stroke="2"
                    height="28"
                    fill="#1C8383"
                    className="bi bi-check-lg w-[6%] sm:w-[10%] flex-shrink-0"
                    viewBox="0 0 14 14"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                  Membangun komunitas GenBi yang solid, inspiratif, produktif, dan berkualitas sehingga mampu menebar kebermanfaatan bagi orang sekitar.
                </li>
                <li className="flex gap-2 justify-center items-start  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    strokeWidth={2}
                    stroke="2"
                    height="28"
                    fill="#1C8383"
                    className="bi bi-check-lg w-[6%] sm:w-[10%] flex-shrink-0"
                    viewBox="0 0 14 14"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                  Mengoptimalkan pengembangan future leaders GenBi Universitas Islam Kadiri dengan program kerja yang efektif dan berkualitas
                </li>
                <li className="flex gap-2 justify-center items-start  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    strokeWidth={2}
                    stroke="2"
                    height="28"
                    fill="#1C8383"
                    className="bi bi-check-lg w-[6%] sm:w-[10%] flex-shrink-0"
                    viewBox="0 0 14 14"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                  Mengadakan program kerja dengan turut aktif membersamai masyarakat dan generasi muda bangsa, yang bersifat responsif terhadap isu-isu yang
                  berkembang.
                </li>
                <li id="kontak" className="flex gap-2 justify-center items-start ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    strokeWidth={2}
                    stroke="2"
                    height="28"
                    fill="#1C8383"
                    className="bi bi-check-lg w-[6%] sm:w-[10%] flex-shrink-0"
                    viewBox="0 0 14 14"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                  Menciptakan optimalisasi lingkungan komunitas dengan meningkatkan intelektualitas, profesionalitas, tanggung jawab terhadap visi misi GenBi.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* HIGHLIGHT BERITA */}
      <Section title="Highlight Post">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap justify-center gap-8">
            {news.map((e) => {
              console.log(e.title);
              return (
                <div key={e.id} className="max-w-96 h-fit">
                  {e.image && <Image alt={e.title} src={e.image} width={800} height={500} className="object-cover object-center rounded-lg" />}
                  <div className="px-4 text-center">
                    <Link href={`/news/${e.slug}`} className="my-2 text-lg">
                      <H3>{e.title}</H3>
                    </Link>
                    <P className="text-primary">{e.description}</P>
                  </div>
                </div>
              );
            })}
          </div>
          <Link href={'/news'} className="text-center my-4 text-lg text-muted-foreground font-semibold hover:font-bold hover:text-primary">
            Baca Selengkapnya
          </Link>
        </div>
      </Section>

      {/* DIVISI GENBI UNISKA */}
      <Section title="Divisi GENBI" description="Periode 2024/2025">
        <section className="flex text-center justify-center sm:gap-2 sm:px-12 gap-5 px-32 lg:gap-12">
          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === 'dark' ? '#fff' : '#4B5563'}
              width="100"
              height="100"
              className="w-8 h-8 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20"
              viewBox="0 0 24 24"
            >
              <path d="M2 8v11.529S6.621 19.357 12 22c5.379-2.643 10-2.471 10-2.471V8s-5.454 0-10 2.471C7.454 8 2 8 2 8z"></path>
              <circle cx="12" cy="5" r="3"></circle>
            </svg>
            <P>Pendidikan</P>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === 'dark' ? '#fff' : '#4B5563'}
              width="100"
              height="100"
              className="bi bi-briefcase-fill w-8 h-8 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
            </svg>
            <P>Internasionalisasi</P>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === 'dark' ? '#fff' : '#4B5563'}
              width="100"
              height="100"
              className="bi bi-briefcase-fill w-8 h-8 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
            </svg>
            <P>Kewirausahaan</P>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === 'dark' ? '#fff' : '#4B5563'}
              width="100"
              height="100"
              className="w-8 h-8 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20"
              viewBox="0 0 24 24"
            >
              <path
                d="m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0
            0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39
            1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"
              ></path>
            </svg>
            <P>Lingkungan Hidup</P>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === 'dark' ? '#fff' : '#4B5563'}
              width="100"
              height="100"
              className="bi bi-info-circle-fill w-8 h-8 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20"
              viewBox="0 0 16 16"
            >
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
            </svg>
            <P>Komunikasi dan Informasi</P>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill={theme === 'dark' ? '#fff' : '#4B5563'}
              width="100"
              height="100"
              className="bi bi-people-fill w-8 h-8 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
            <P>Pengabdian Masyarakat</P>
          </div>
        </section>
      </Section>

      {/* HUBUNGI KAMI */}
      <Section title="Hubungi Kami">
        <div className="flex flex-col lg:flex lg:flex-row lg:justify-center lg:gap-10 gap-3 justify-center items-center lg:px-28 sm:px-12 px-6">
          <div className="lg:w-1/2 w-full flex flex-col justify-around lg:gap-24 sm:gap-20 gap-6">
            <div className="h-1/2" data-aos="fade-right">
              <H2 className="font-bold text-lg sm:text-xl md:text-2xl text-[#1C8383] dark:text-white md:mb-2">Reach Us !</H2>
              <H2 className="font-bold text-lg sm:text-xl md:text-2xl text-primary">Don{"'"}t hesitate to contact us for more information.</H2>
              <P className="text-sm md:text-base text-primary">If you have questions, please contact us via the contact form on this page.</P>
            </div>

            <div className="h-max pb-12" data-aos="fade-right">
              <P className="font-semibold text-primary">GENBI</P>
              <P className="font-semibold text-primary">Universitas Islam Kadiri-Kediri</P>
              <P className="md:text-base text-sm text-primary">Jl. Sersan Suharmaji No.38, Manisrenggo, Kec. Kota, Kota Kediri, Jawa Timur 64128</P>
            </div>
          </div>

          <form className="lg:w-1/2 w-full" onSubmit={handleSubmit}>
            <H4 className="text-primary mb-2">Send Message</H4>

            <div className="mb-2 sm:flex sm:flex-row flex flex-col justify-between gap-4">
              <div className="w-full">
                <P className=" text-primary">Nama</P>
                <Input
                  variant="lg"
                  type="text"
                  name="name"
                  placeholder="Masukkan Nama"
                  onChange={(e) => setForm({ ...formState, from_name: e.target.value })}
                />
              </div>

              <div className="w-full">
                <p className=" text-primary">Phone</p>
                <Input
                  variant="lg"
                  type="number"
                  maxLength={15}
                  name="phone"
                  onChange={(e) => setForm({ ...formState, from_phone: e.target.value })}
                  placeholder="Masukkan No Telepon"
                />
              </div>
            </div>

            <p className="mb-2 text-primary">Email</p>
            <Input
              variant="lg"
              type="email"
              name="email"
              placeholder="Masukkan Email"
              onChange={(e) => setForm({ ...formState, from_email: e.target.value })}
            />

            <p className="mb-2 text-primary">Pesan</p>
            <Textarea name="pesan" placeholder="Ask anything about GENBI UNISKA" onChange={(e) => setForm({ ...formState, message: e.target.value })} />

            <Button className="my-12 bg-foreground" type="submit">
              Kirim
            </Button>
          </form>
        </div>
      </Section>

      <Footer />
    </main>
  );
};
