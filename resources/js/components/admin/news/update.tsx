import { ToasterContext } from "@/context/toaster";
import { News } from "@/types/news";
import { router } from "@inertiajs/react";
import { useContext, useState } from "react";
import { QuillOptions } from "react-quill";
import ReactQuill from "react-quill"
import AdminLayout from "../layouts";
import { formatDate, validateImageExtension } from "@/lib";

interface StateNews extends News {
    imageFile?: File
}

const UpdateNews = ({ anggota, news }: { anggota: {id: number, name: string}[], news: News }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const DefaultNews: StateNews = {
        id: news.id,
        title: news.title,
        description: news.description,
        slug: news.slug,
        content: news.content,
        category: news.category,
        image: news.image,
        video: news.video,
        author: news.author,
        date: news.date,
        created_at: news.created_at,
        updated_at: news.updated_at,
        meta_title: news.meta_title,
        meta_description: news.meta_description,
        meta_author: news.meta_author,
        meta_keywords: news.meta_keywords,
        meta_image: news.meta_image,
        meta_url: news.meta_url,
        author_name: news.author_name
    }
    const [newsState, setNewsState] = useState<StateNews>(DefaultNews);
    const { setToaster } = useContext(ToasterContext)

    const options: QuillOptions = {
        modules: {
            toolbar: true
        },
        placeholder: "Write something awesome like at Microsoft Word...",
        theme: "snow"
    }

    const handleUpdateNews = async () => {
        setLoading(true)
        newsState.slug = newsState.slug ?? newsState.title.toLowerCase().replaceAll(" ", "-")
        console.log({ newsState })
        try {
            const res = await fetch("/api/news", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newsState),
            })
            const data = await res.json();
            console.log({ data });

            if (data.statusCode === 200) {
                setToaster({ variant: "success", message: "Success Update News" })
                setLoading(false)
                router.visit("/admin/news")
                return
            } else if (data.statusCode === 400) {
                setToaster({ variant: "warning", message: "Invalid Date Format" })
                setLoading(false)
                return
            } else {
                setToaster({ variant: "danger", message: "Failed Update News" })
                setLoading(false)
                return
            }
        } catch (error) {
            console.error("Error uploading news:", error);
            setLoading(false)
            return
        } finally {
            setLoading(false)
        }
    }

    return (
        <AdminLayout>
            <div className="flex px-8 flex-col text-gray-700 mb-96">
                <h2 className="my-6 text-2xl font-semibold">Update News</h2>
                {news.image && validateImageExtension(news.image) && (
                    <div className="w-1/2 my-10 mx-auto">
                        <img alt="" width={800} height={500} src={news.image} className="w-full object-cover object-center" />
                    </div>
                )}

                <form className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-4 w-full">

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Title</p>
                            <input onChange={(e) => setNewsState({ ...newsState, title: e.target.value })} defaultValue={news.title} type="text" placeholder="Example: Temu Responden 2024" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">
                                Slug
                                <span className="text-xs text-nowrap"> ( Bagian dari URL contoh : https://www.genbi-uniska.com/genbi-uniska/temu-responden-2024 )</span>
                            </p>
                            <input onChange={(e) => setNewsState({ ...newsState, slug: e.target.value })} defaultValue={news.slug} type="text" placeholder="Example: temu-responden-2024" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Category</p>
                            <input onChange={(e) => setNewsState({ ...newsState, category: e.target.value })} defaultValue={news.category} type="text" placeholder="Example Category : Proker Genbi" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Author</p>
                            <select onChange={(e) => setNewsState({ ...newsState, author: parseInt(e.target.value) })} defaultValue={news.author} name="anggota" className="w-full border border-slate-300 rounded-md px-4 py-2 cursor-pointer">
                                {anggota.map(e => (
                                    <option key={e.id} value={e.id}>{e.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="w-2/5 flex flex-col">
                            <p className="font-semibold mb-1">Date</p>
                            <input onChange={(e) => setNewsState({ ...newsState, date: e.target.value })} defaultValue={news.date} type="datetime-local" placeholder="Date" className="w-fit border border-slate-300 rounded-md px-4 py-2" />
                            <span className="text-sm mb-2">Old Date: {formatDate(news.date)}</span>
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Image</p>
                            <input type="file" onChange={(e) => setNewsState({ ...news, imageFile: e.target.files![0] })} className="text-sm" />
                        </div>
                    </div>
                    <div className="w-4/5">
                        <p className="font-semibold">Description</p>
                        <textarea onChange={(e) => setNewsState({ ...newsState, description: e.target.value })} defaultValue={news.description} placeholder="Example Kesehatan Mental dan Revolusi Industri 4.0. Kinerja Optimal Menghadapi Dinamika Ekonomi Global" className="w-full min-h-52 border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                        <span className="text-sm">Deskripsi ini akan muncul di halaman news.</span>
                    </div>

                    <p className="font-semibold">Content</p>
                    <div className="h-fit bg-white">
                        <ReactQuill onChange={(e) => setNewsState({ ...newsState, content: e })} defaultValue={news.content} className="h-full bg-white" theme={options.theme} placeholder={options.placeholder} modules={options.modules} />
                    </div>
                    <span className="text-sm mb-2">Content ini akan menjadi tampilan blog berita, buat dengan format yang rapi layaknya sebuah artikel di internet</span>

                    <h2 className="my-6 text-2xl font-semibold">Meta Data for Optimize Search Engine</h2>

                    <div className="flex flex-wrap gap-4 w-full">

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">meta title</p>
                            <input onChange={(e) => setNewsState({ ...newsState, meta_title: e.target.value })} defaultValue={news.meta_title} type="text" placeholder="Example: Peluncuran Aplikasi GENBI UNISKA" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                            <span className="text-sm">
                                Meta title adalah judul halaman yang muncul di hasil pencarian.
                                Gunakan judul yang menarik dan relevan untuk meningkatkan klik dari hasil pencarian (Click Through Rate - CTR).
                            </span>
                        </div>
                        <div className="w-2/5">
                            <p className="font-semibold mb-1">meta author</p>
                            <input onChange={(e) => setNewsState({ ...newsState, meta_author: e.target.value })} defaultValue={news.meta_author} type="text" placeholder="Example: Divisi Kominfo GENBI UNISKA" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                            <span className="text-sm">
                                Meta author mencantumkan siapa yang membuat konten.
                                Memberikan kredibilitas pada konten, terutama untuk artikel atau berita.
                            </span>
                        </div>
                        <div className="w-4/5">
                            <p className="font-semibold mb-1">meta keywords</p>
                            <input onChange={(e) => setNewsState({ ...newsState, meta_keywords: e.target.value })} defaultValue={news.meta_keywords} type="text" placeholder="Example: GENBI, UNISKA, aplikasi GENBI, berita GENBI, peluncuran aplikasi" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                            <span className="text-sm">
                                Meta keywords adalah kata kunci yang relevan dengan konten halaman.
                                Walaupun kurang digunakan oleh mesin pencari modern, tetap berguna untuk pengorganisasian internal.
                            </span>
                        </div>
                        <div className="w-4/5">
                            <p className="font-semibold mb-1">meta description</p>
                            <textarea onChange={(e) => setNewsState({ ...newsState, meta_description: e.target.value })} defaultValue={news.meta_description} placeholder="Example: GENBI UNISKA dengan bangga meluncurkan aplikasi terbaru untuk mempermudah akses informasi" className="w-full h-36 border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                            <span className="text-sm">
                                Meta description adalah ringkasan singkat konten yang ditampilkan di hasil pencarian.
                                Menulis deskripsi yang jelas dan menarik dapat meningkatkan CTR (Click Through Rate) dan menarik pengunjung.
                            </span>
                        </div>
                    </div>

                </form>
                <button disabled={loading} onClick={handleUpdateNews} className="flex h-fit w-fit items-center gap-2 py-2 px-4 my-4 bg-toska text-white hover:bg-toska-dark rounded-md disabled:cursor-not-allowed disabled:opacity-50">
                    {loading ? 'Loading...' : 'Submit'}
                </button>

            </div>
        </AdminLayout>
    )
}

export default UpdateNews
