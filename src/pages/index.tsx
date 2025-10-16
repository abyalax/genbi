import Image from "next/image";
import { Inter } from "next/font/google";
import { FormEvent, useContext, useEffect, useState } from "react";
import AOS from "aos"
import "aos/dist/aos.css";
import Head from "next/head";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import { ToasterContext } from "@/context/toaster";
import Link from "next/link";
import dynamic from "next/dynamic";
import { getHotNews, News } from "@/services/news";
import { FaChevronUp } from "react-icons/fa";

const TypingAnimation = dynamic(() => import("@/utils/typing"), { ssr: false })

const inter = Inter({ subsets: ["latin"] });
const quotes = [
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
];

export async function getServerSideProps() {
  const news = await getHotNews();
  return {
    props: { news },
  };
}

export default function Home({ news }: { news: News[] }) {
  const [visible, setVisible] = useState(false);
  const { setToaster } = useContext(ToasterContext)
  console.log({ news });

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
    setToaster({
      variant: "success",
      message: "Welcome to my website. I hope you enjoy it!",
    })
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setToaster]);

  const [formState, setForm] = useState({
    to_name: "GENBI KOMINFO UNISKA",
    from_name: "",
    from_email: "",
    from_phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.target as HTMLFormElement;
    try {
      fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          service_id: process.env.NEXT_PUBLIC_SERVICE_ID,
          template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
          user_id: process.env.NEXT_PUBLIC_USER_ID,
          template_params: formState
        })
      }).then((result) => {
        if (result.ok) {
          alert("Success Send Message");
        } else {
          alert("Failed Send Message");
        }
      })
    } catch (error) {
      console.log(error);
    } finally {
      formElement.reset();
      formState.from_name = "";
      formState.from_email = "";
      formState.from_phone = "";
      formState.message = "";
    }
  }

  useEffect(() => {
    setToaster({
      variant: "success",
      message: "Welcome To GenBI UNISKA"
    })
    return () => {
    };
  }, [setToaster]);

  return (
    <>
      <Head>
        <title>GENBI UNISKA - Home</title>
        <meta name="description" content="Website resmi GENBI UNISKA, Generasi Baru Indonesia untuk Universitas Islam Kadiri-Kediri. Bergabunglah dengan kami untuk berbagai kegiatan positif!" />
        <meta name="keywords" content="GENBI, UNISKA, GENBI UNISKA, Generasi Baru Indonesia, Komunitas GenBI, Kegiatan Sosial" />
        <meta name="author" content="GENBI KOMINFO UNISKA" />
        <meta property="og:title" content="GENBI UNISKA - Home" />
        <meta property="og:description" content="Website resmi GENBI UNISKA, Generasi Baru Indonesia untuk Universitas Islam Kadiri." />
        <meta property="og:image" content="/assets/genbi/logo-genbi-polos.png" />
        <meta property="og:url" content="https://www.genbi-uniska.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/genbi/logo-genbi.png" type="img/png" />
      </Head>
      <main className={`bg-[#edf0f7] text-gray-700 min-h-screen min-w-screen px-0 ${inter.className}`}>
        <Navbar />
        {visible && (
          <button onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }} className="fixed bottom-10 right-10 bg-toska hover:bg-toska-dark p-2 rounded-full">
            <FaChevronUp size={28} color="white"/>
          </button>
        )}
        <section className="text-gray-700 mml:my-12 my-6 text-center pt-20">
          <div data-aos="fade-up" className="w-full sm:px-8 px-4 mml:mx-auto mml:w-3/4 md:px-16">
            <h2 className="text-lg sm:text-xl mml:text-2xl font-semibold mb-1">
              Selamat datang di website GENBI UNISKA Kediri
            </h2>
            <div className="font-semibold mb-4 w-fit mx-auto">
              <TypingAnimation className="text-center text-sm sm:text-xl mml:text-xl" text={quotes} speed={80} delay={2000} />
            </div>
            <p className="text-slate-600 sm:text-sm xxs:text-sm">
              Generasi Baru Indonesia (GenBI) adalah komunitas mahasiswa penerima
              beasiswa Bank Indonesia yang tersebar di seluruh Indonesia.
            </p>
          </div>
        </section>

        <section >
          <div className="flex justify-center w-full" data-aos="fade-up">
            <Image src={"/assets/img/homepage.jpg"} alt="/assets/img/homepage.jpg" width={1000} height={600} className="w-3/4 mml:h-[50vh] rounded-xl object-cover object-center" />
          </div>
        </section>

        {/* SINGKAT TENTANG KITA */}
        <h2 className="text-lg sm:text-xl mml:text-3xl font-semibold text-[#1C8383] text-center mml:my-12 sm:my-6 my-4">About Us</h2>
        <section className="lg:grid lg:grid-cols-2 mml:flex mml:flex-col gap-6 text-gray-800 px-6 sm:px-14 lg:px-32 ">
          <div className="mml:col-span-1 sm:w-full flex gap-1" data-aos="fade-right">
            <Image src={"/assets/img/rapat.jpg"} alt="/assets/img/rapat.jpg" width={600} height={600} className=" w-2/3 rounded object-cover object-center" />
            <Image src={"/assets/img/rektor.jpg"} alt="/assets/img/rektor.jpg" width={800} height={600} className="w-1/3 rounded object-cover object-center" />
          </div>
          <div className="sm:w-full mml:col-span-1 " data-aos="fade-left">
            <h2 className="text-lg sm:text-xl mml:text-2xl xxs:text-center mml:text-start font-semibold mb-4">Kami adalah Generasi Baru Indonesia Universitas Islam Kadiri-Kediri</h2>
            <p className="text-justify text-sm sm:text-base">
              Generasi Baru Indonesia (GenBi) adalah komunitas mahasiswa penerima
              beasiswa Bank Indonesia yang didirikan pada 11 November 2011.
              GenBi berperan sebagai Frontliners Bank Indonesia, berfokus pada
              pemberdayaan masyarakat untuk pembangunan berkelanjutan.
              GenBi aktif di tingkat kampus, regional, dan nasional.
              Universitas Islam Kadiri-Kediri (UNISKA) menjadi mitra dalam program ini mulai tahun 2024.
              GenBi UNISKA telah merencanakan berbagai program yang bermanfaat bagi masyarakat,
              mengembangkan kepekaan sosial, softskill, hardskill, dan jiwa kepemimpinan
              anggotanya untuk menciptakan pemimpin masa depan.
            </p>
          </div>
        </section>

        {/* VISI DAN MISI */}
        <h2 className="text-lg sm:text-xl mml:text-3xl font-semibold text-[#1C8383] text-center mml:my-12 mb-12">Our Vission and Mission</h2>
        <section>
          <div className="flex flex-col mml:flex mml:flex-row mml:justify-center mml:px-28 px-0 lg:px-16 justify-center items-center gap-10 mb-28">

            <div className="mml:w-1/2 w-3/4" data-aos="fade-right">
              <div className="relative h-[500px] sm:h-[450px] xs:h-[350px] xxs:h-[280px] bg-gradient-to-r from-[#1C8383] to-green-50 rounded-custom sm:pl-6 sm:pr-0 sm:pt-5 xxs:pl-4 xxs:pr-0 xxs:pt-3 xxs:pb-2 mml:pl-12 mml:pr-2 mml:pt-10 pl-6 pr-1 pt-5">

                <div className="absolute mml:min-h-44 mml:min-w-44 xs:min-w-32 xs:min-h-32 xxs:min-w-28 xxs:min-h-28 min-w-[118px] min-h-[90px] top-12 left-24 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-2xl flex flex-col justify-center items-center z-10">
                  <h2 className="mml:text-5xl md:text-4xl sm:text-3xl text-xl font-semibold font-mono">2025</h2>
                  <p className="sm:text-base text-sm text-wrap font-semibold">GENBI UNISKA</p>
                </div>

                <div className="relative bg-[#1C8383] w-full">
                  <Image alt="/assets/img/fotbar.jpg" src={"/assets/img/fotbar.jpg"} width={800} height={500} className="absolute w-full rounded-custom" />
                </div>

              </div>
            </div>

            <div className="mml:w-1/2 w-3/4 flex flex-col gap-5">
              <div data-aos="fade-up">
                <h2 className="mml:text-2xl text-xl font-bold text-[#1C8383]">Who We Are</h2>
                <h2 className="mml:text-5xl text-3xl font-bold font-serif">Our Vision</h2>
                <p className="text-justify">
                  Terwujudnya generasi baru Indonesia yang aktif, responsif, dan
                  konstruktif dalam gerakan, pengabdian, pelayanan serta
                  pengembangan minat dan bakat mahasiswa untuk GENBI UNISKA dan Indonesia.
                </p>
              </div>
              <div data-aos="fade-up">
                <h2 className="mml:text-5xl text-3xl font-bold font-serif">Our Mission</h2>
                <ul className="text-justify">
                  <li className="flex gap-2 justify-center items-start ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" strokeWidth={2} stroke="2" height="28" fill="#1C8383" className="bi bi-check-lg w-[6%] sm:w-[10%] flex-shrink-0" viewBox="0 0 14 14">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Membangun komunitas GenBi yang solid, inspiratif, produktif, dan berkualitas sehingga mampu menebar kebermanfaatan bagi orang sekitar.
                  </li>
                  <li className="flex gap-2 justify-center items-start  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" strokeWidth={2} stroke="2" height="28" fill="#1C8383" className="bi bi-check-lg w-[6%] sm:w-[10%] flex-shrink-0" viewBox="0 0 14 14">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Mengoptimalkan pengembangan future leaders GenBi Universitas Islam Kadiri dengan program kerja yang efektif dan berkualitas
                  </li>
                  <li className="flex gap-2 justify-center items-start  ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" strokeWidth={2} stroke="2" height="28" fill="#1C8383" className="bi bi-check-lg w-[6%] sm:w-[10%] flex-shrink-0" viewBox="0 0 14 14">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Mengadakan program kerja dengan turut aktif membersamai masyarakat dan generasi muda bangsa, yang bersifat responsif terhadap isu-isu yang berkembang.
                  </li>
                  <li id="kontak" className="flex gap-2 justify-center items-start ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" strokeWidth={2} stroke="2" height="28" fill="#1C8383" className="bi bi-check-lg w-[6%] sm:w-[10%] flex-shrink-0" viewBox="0 0 14 14">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                    </svg>
                    Menciptakan optimalisasi lingkungan komunitas dengan meningkatkan intelektualitas, profesionalitas, tanggung jawab terhadap visi misi GenBi.
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* HIGHLIGHT BERITA */}
        <section className="flex flex-col items-center mt-48">
          <h2 className="text-lg sm:text-xl mml:text-3xl font-semibold text-[#1C8383] text-center mml:my-12 mb-12">Highlight Post</h2>

          <div className="flex flex-wrap justify-center gap-8">

            {news.map((e) => (
              <div key={e.id} className="max-w-96 h-fit text-black">
                {e.image && (
                  <Image alt={e.title} src={e.image} width={800} height={500} className="object-cover object-center rounded-lg" />
                )}
                <div className="px-4 text-center">
                  <Link href={`/news/${e.slug}`} className=" my-2 text-lg">{e.title}</Link>
                  <p className=" text-gray-500 text-sm">{e.description}</p>
                </div>
              </div>
            ))}

          </div>
          <Link href={"/news"} className="text-center my-4 text-lg text-gray-700 font-semibold hover:font-bold hover:text-gray-900">Baca Selengkapnya</Link>
        </section>

        {/* DIVISI GENBI UNISKA */}
        <h2 className="text-lg sm:text-xl mml:text-3xl font-semibold text-[#1C8383] text-center mml:mt-12 sm:mt-6 mt-4">Divisi GENBI</h2>
        <h2 className="text-lg sm:text-xl mml:text-3xl font-semibold text-[#1C8383] text-center sm:my-2">Universitas Islam Kadiri-Kediri</h2>
        <p className="text-center mml:mb-12 sm:mb-6 font-semibold">Periode 2024/2025</p>

        <section className="flex text-center justify-center sm:gap-2 sm:px-12 mml:gap-5 mml:px-32 lg:gap-12">

          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" className="w-8 h-8 xxs:w-14 xxs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20" viewBox="0 0 24 24">
              <path d="M2 8v11.529S6.621 19.357 12 22c5.379-2.643 10-2.471 10-2.471V8s-5.454 0-10 2.471C7.454 8 2 8 2 8z">
              </path><circle cx="12" cy="5" r="3"></circle>
            </svg>
            <p className="font-semibold">Pendidikan</p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" className="bi bi-briefcase-fill w-8 h-8 xxs:w-14 xxs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20" viewBox="0 0 24 24">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z">
              </path>
            </svg>
            <p className="font-semibold">Internasionalisasi</p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" className="bi bi-briefcase-fill w-8 h-8 xxs:w-14 xxs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20" viewBox="0 0 16 16">
              <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
              <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
            </svg>
            <p className="font-semibold">Kewirausahaan</p>
          </div>

          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" className="w-8 h-8 xxs:w-14 xxs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20" viewBox="0 0 24 24">
              <path d="m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0 
            0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39
            1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"></path>
            </svg>
            <p className="font-semibold">Lingkungan Hidup</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" className="bi bi-info-circle-fill w-8 h-8 xxs:w-14 xxs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20" viewBox="0 0 16 16">
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
            </svg>
            <p className="font-semibold">Komunikasi dan Informasi</p>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center rounded-lg p-4 w-fit" data-aos="zoom-in">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#4B5563" width="100" height="100" className="bi bi-people-fill w-8 h-8 xxs:w-14 xxs:h-14 sm:w-16 sm:h-16 md:w-16 md:h-24 lg:w-20 lg:h-20" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
            </svg>
            <p className="font-semibold">Pengabdian Masyarakat</p>
          </div>
        </section>

        {/* HUBUNGI KAMI */}
        <h2 className="text-lg sm:text-xl mml:text-3xl font-semibold text-[#1C8383] text-center mml:mt-24 mml:mb-12 mb-4 ">Hubungi Kami</h2>
        <section>
          <div className="flex flex-col mml:flex mml:flex-row mml:justify-center mml:gap-10 gap-3 justify-center items-center mml:px-28 sm:px-12 px-6">
            <div className="mml:w-1/2 w-full flex flex-col justify-around mml:gap-24 sm:gap-20 gap-6">
              <div className="h-1/2" data-aos="fade-right">
                <h2 className="font-bold text-lg sm:text-xl mml:text-2xl text-[#1C8383] mml:mb-2">Reach Us !</h2>
                <h2 className="font-bold text-lg sm:text-xl mml:text-2xl ">
                  Don{"'"}t hesitate to contact us for more information.
                </h2>
                <p className="text-slate-500 text-sm mml:text-base">
                  If you have questions, please contact us via the contact
                  form on this page.
                </p>
              </div>

              <div className="h-max pb-12" data-aos="fade-right">
                <p className="font-semibold">GENBI</p>
                <p className="font-semibold">Universitas Islam Kadiri-Kediri</p>
                <p className="mml:text-base text-sm">
                  Jl. Sersan Suharmaji No.38, Manisrenggo, Kec. Kota, Kota Kediri, Jawa Timur 64128
                </p>
              </div>

            </div>

            <form className="mml:w-1/2 w-full" onSubmit={handleSubmit}>
              <h2 className="text-lg mml:text-xl font-semibold mml:mb-4 mb-2">Send Message</h2>

              <div className="mb-2 sm:flex sm:flex-row flex flex-col justify-between gap-4">
                <div className="w-full">
                  <p className=" text-slate-600">Nama</p>
                  <input type="text" name="name" placeholder="Masukkan Nama" onChange={(e) => setForm({ ...formState, from_name: e.target.value })} className="border border-gray-400 mb-4 w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#1C8383] rounded-lg" />
                </div>

                <div className="w-full">
                  <p className=" text-slate-600">Phone</p>
                  <input type="number" maxLength={15} name="phone" onChange={(e) => setForm({ ...formState, from_phone: e.target.value })} placeholder="Masukkan No Telepon" className="border border-gray-400 mb-4 w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#1C8383] rounded-lg" />
                </div>
              </div>

              <p className="mb-2 text-slate-600">Email</p>
              <input type="email" name="email" placeholder="Masukkan Email" onChange={(e) => setForm({ ...formState, from_email: e.target.value })} className="border border-gray-400 mb-4 w-full p-3 focus:outline-none focus:ring-1 focus:ring-[#1C8383] rounded-lg" />

              <p className="mb-2 text-slate-600">Pesan</p>
              <textarea name="pesan" placeholder="Ask anything about GENBI UNISKA" onChange={(e) => setForm({ ...formState, message: e.target.value })} className="border border-gray-400 mb-4 w-full p-3 h-32 focus:outline-none focus:ring-1 focus:ring-[#1C8383] rounded-lg" />

              <div className="w-full flex justify-end items-end">
                <button type="submit" className="bg-[#1C8383] hover:bg-[#156767] text-white sm:w-fit w-full py-2 px-6 rounded-xl my-3 font-semibold text-lg disabled:cursor-not-allowed disabled:bg-gray-500">
                  Kirim
                </button>
              </div>

            </form>

          </div>
        </section>

        <Footer />

      </main>
    </>

  );
}
