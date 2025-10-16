import Footer from "@/component/footer"
import Navbar from "@/component/navbar"
import QuillContent from "@/component/quill-content"
import { getNewsBySlug, News } from "@/services/news"
import { formatDate } from "@/utils/convert-date"
import Head from "next/head"
import Image from "next/image"
import { Facebook, ShareLink, Telegram, Twitter, WhatsApp } from "@/component/ui/share"

export async function getServerSideProps({ params }: { params: { slug: string } }) {
    const news: News[] = await getNewsBySlug(params.slug)
    return {
        props: { news }
    };
}

const DetailNews = ({ news }: { news: News[] }) => {

    return (
        <>
            <Head>
                <title>{news[0].title}</title>
                <meta name="description" content="Pelajari lebih lanjut tentang Temu Responden Bank Indonesia 2024" />
                <meta name="keywords" content="GENBI UNISKA, Temu Responden Bank Indonesia 2024, Generasi Baru Indonesia, GENBI Universitas Islam Kadiri" />
                <meta name="author" content="GENBI KOMINFO UNISKA" />
                <meta property="og:title" content="GENBI UNISKA - News" />
                <meta property="og:description" content="Kenali lebih dekat GENBI UNISKA yang menjadi mitra Bank Indonesia. Temukan informasi lengkap tentang temu responden bank Indonesia 2024." />
                <meta property="og:image" content="/assets/genbi/logo-genbi-polos.png" />
                <meta property="og:url" content="https://www.genbi-uniska.com/profile" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/assets/genbi/logo-genbi.png" type="image/png" />
            </Head>
            <main className="min-w-[1080px]">
                <Navbar />
                <section className="w-4/5 mx-auto text-gray-700 pt-28">
                    <h2 className="text-4xl font-bold mx-20">{news[0].title}</h2>
                    <div className="flex justify-between gap-10 my-4 px-20">
                        <p>Oleh : {news[0].author_name}</p>
                        <div>
                            <p>{formatDate(news[0].date)}</p>
                            <p className="text-end">IKCC</p>
                        </div>
                    </div>
                    <div className="flex gap-2 my-4 px-20">
                        <WhatsApp separator="::" title="Ini Title " url="http://localhost:3000/news/temu-responden-2024" />
                        <Facebook hashtag="#genbiuniska" quote="Ini Quote" url="http://localhost:3000/news/temu-responden-2024" />
                        <Twitter hashtags={["#genbiuniska", "#temuresponden2024"]} related={["@genbiuniska", "@temuresponden2024"]} via="@genbiuniska" title="Ini Title" url="http://localhost:3000/news/temu-responden-2024" />
                        <Telegram url="http://localhost:3000/news/temu-responden-2024" />
                        <ShareLink link="http://localhost:3000/news/temu-responden-2024" />
                    </div>
                    {news[0].image && (
                    <div className="w-full px-20">
                        <Image src={news[0].image} alt="/assets/kegiatan/a.jpeg" width={1000} height={600} className="w-full h-[70vh] mx-auto object-cover object-center rounded-lg" />
                        <p className="border-l-2 border-red-500 italic pl-2 mt-2 mb-10">
                            {news[0].meta_description}
                        </p>
                    </div>
                    )}
                    <main className="grid grid-cols-8">
                        <article className="col-span-6">
                            <div className="whitespace-pre-line text-justify">
                                <QuillContent content={news[0].content} />
                            </div>
                        </article>
                        <aside className="col-span-2 bg-slate-400 rounded-lg p-4 m-4">
                            <h2 className="text-lg">Berita terbaru</h2>

                        </aside>
                    </main>
                    <h2 className="flex gap-2 items-center h-fit pb-2 pt-4 px-20">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="black" className="bi bi-share-fill " strokeWidth={1} stroke="black" viewBox="0 0 16 16">
                            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
                        </svg>
                        Bagikan :
                    </h2>
                    <div className="flex gap-2 my-4 px-20">
                        <WhatsApp separator="::" title="Ini Title " url="http://localhost:3000/news/temu-responden-2024" />
                        <Facebook hashtag="#genbiuniska" quote="Ini Quote" url="http://localhost:3000/news/temu-responden-2024" />
                        <Twitter hashtags={["#genbiuniska", "#temuresponden2024"]} related={["@genbiuniska", "@temuresponden2024"]} via="@genbiuniska" title="Ini Title" url="http://localhost:3000/news/temu-responden-2024" />
                        <Telegram url="http://localhost:3000/news/temu-responden-2024" />
                        <ShareLink link="http://localhost:3000/news/temu-responden-2024" />
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}

export default DetailNews
