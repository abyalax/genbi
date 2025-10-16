import Image from "next/image";
import Footer from "@/component/footer";
import Navbar from "@/component/navbar";
import Head from "next/head";
import { Gallery, getAllGallery } from "@/services/news";
import { useRouter } from "next/router";

export async function getServerSideProps() {
  const gallery = await getAllGallery()
  return {
    props: { gallery },
  };
}
const GalleryPage = ({ gallery }: { gallery: Gallery[] }) => {
  const { push } = useRouter()

  console.log({ gallery });

  return (
    <>
      <Head>
        <title>GENBI UNISKA - Dokumentasi</title>
        <meta name="description" content="Temukan kumpulan dokumentasi foto dari berbagai kegiatan GENBI UNISKA. Setiap momen berharga yang telah dilakukan oleh Generasi Baru Indonesia Universitas Islam Kadiri tersimpan di sini." />
        <meta name="keywords" content="Gallery GENBI, Foto Kegiatan GENBI UNISKA, Dokumentasi GENBI UNISKA, Foto Proker GENBI, Generasi Baru Indonesia, GENBI Universitas Islam Kadiri" />
        <meta name="author" content="GENBI KOMINFO UNISKA" />
        <meta property="og:title" content="Gallery GENBI UNISKA - Dokumentasi Kegiatan" />
        <meta property="og:description" content="Temukan berbagai foto dokumentasi kegiatan GENBI UNISKA, menampilkan momen berharga dari program kerja yang telah terlaksana." />
        <meta property="og:image" content="/assets/genbi/logo-genbi-polos.png" />
        <meta property="og:url" content="https://www.genbi-uniska.com/gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/genbi/logo-genbi.png" type="image/png" />
      </Head>

      <main className="w-full bg-[#edf0f7] min-h-screen">
        <Navbar />
        <div className="pt-24 pb-6 ml:mx-32 sm:mx-24 xs:mx-8 xxs:mx-4 mx-2 text-center border-b-2 border-slate-500">

          <h2 className="ml:text-3xl md:text-2xl sm:text-xl text-lg font-semibold mb-3">
            Gallery
          </h2>

          <p className="text-gray-500">
            Find various interesting photos and videos from GenBI UNISKA activities on this page.
          </p>

        </div>

        <section>
          <div className="flex flex-wrap md:gap-14 sm:gap-12 xxs:gap-8 gap-8 justify-center items-start ml:px-20 md:px-14 sm:px-12 xxs:px-8 px-2 pt-6">
            {gallery.map((e, i) => (
              <div key={i} className="h-52 w-80" onClick={() => push(`/news/${e.slug}`)}>
                <Image src={e.image} alt={e.title} width={500} height={500} className="w-full h-full object-center object-cover rounded" />
                <p className="text-center text-gray-700 mb-4 mt-2">Temu Responden dan Seminar 2024</p>
              </div>
            ))}
            <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 2</div>
            <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 3</div>
            <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 4</div>
            <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 5</div>
            <div className="h-52 w-80 p-4 rounded-lg bg-slate-400">gallery 6</div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  )
};

export default GalleryPage;