import dynamic from "next/dynamic"
import { QuillOptions } from "react-quill"
import AdminLayout from "../../../component/admin/__layout"
import { NamaAnggota, getAllNamaAnggota } from "@/services/anggota"
import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary"
import { useContext, useState } from "react"
import { getNewsByID, News } from "@/services/news"
import { formatDate } from "@/utils/convert-date"
import Image from "next/image"
import { validateImageExtension } from "@/utils/utils"
import { ToasterContext } from "@/context/toaster"
import { useRouter } from "next/navigation"

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false })

export async function getServerSideProps({ params }: { params: { id: number } }) {
    const anggota: NamaAnggota[] = await getAllNamaAnggota();
    const news: News[] = await getNewsByID(params.id)
    return {
        props: { anggota, news },
    };
}

const UpdateNews = ({ anggota, news }: { anggota: NamaAnggota[], news: News[] }) => {
    const [loading, setLoading] = useState<boolean>(false)
    const DefaultNews: News = {
        id: news[0].id,
        title: news[0].title,
        description: news[0].description,
        slug: news[0].slug,
        content: news[0].content,
        category: news[0].category,
        image: news[0].image,
        video: news[0].video,
        author: news[0].id,
        date: news[0].date,
        created_at: news[0].created_at,
        updated_at: news[0].updated_at,
        meta_title: news[0].meta_title,
        meta_description: news[0].meta_description,
        meta_author: news[0].meta_author,
        meta_keywords: news[0].meta_keywords,
        meta_image: news[0].meta_image,
        meta_url: news[0].meta_url,
        author_name: news[0].author_name
    }
    const [newsState, setNewsState] = useState<News>(DefaultNews);
    const { setToaster } = useContext(ToasterContext)
    const { push } = useRouter();

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
                push("/admin/news")
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

    const handleUpload = async (result: CloudinaryUploadWidgetResults) => {
        const resultUpload = result.info as CloudinaryUploadWidgetInfo
        const image = resultUpload.secure_url
        console.log("Succes Upload Image", image);
        setNewsState(prevState => ({
            ...prevState,
            image,
            meta_image: image
        }));

    };

    return (
        <AdminLayout>
            <div className="flex px-8 flex-col text-gray-700 mb-96">
                <h2 className="my-6 text-2xl font-semibold">Update News</h2>
                {news[0].image && validateImageExtension(news[0].image) && (
                    <div className="w-1/2 my-10 mx-auto">
                        <Image alt="" width={800} height={500} src={news[0].image} className="w-full object-cover object-center" />
                    </div>
                )}

                <form className="flex flex-col gap-2">
                    <div className="flex flex-wrap gap-4 w-full">

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Title</p>
                            <input onChange={(e) => setNewsState({ ...newsState, title: e.target.value })} defaultValue={news[0].title} type="text" placeholder="Example: Temu Responden 2024" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">
                                Slug
                                <span className="text-xs text-nowrap"> ( Bagian dari URL contoh : https://www.genbi-uniska.com/genbi-uniska/temu-responden-2024 )</span>
                            </p>
                            <input onChange={(e) => setNewsState({ ...newsState, slug: e.target.value })} defaultValue={news[0].slug} type="text" placeholder="Example: temu-responden-2024" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Category</p>
                            <input onChange={(e) => setNewsState({ ...newsState, category: e.target.value })} defaultValue={news[0].category} type="text" placeholder="Example Category : Proker Genbi" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Author</p>
                            <select onChange={(e) => setNewsState({ ...newsState, author: parseInt(e.target.value) })} defaultValue={news[0].author} name="anggota" className="w-full border border-slate-300 rounded-md px-4 py-2 cursor-pointer">
                                {anggota.map(e => (
                                    <option key={e.id} value={e.id}>{e.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="w-2/5 flex flex-col">
                            <p className="font-semibold mb-1">Date</p>
                            <input onChange={(e) => setNewsState({ ...newsState, date: e.target.value })} defaultValue={news[0].date} type="datetime-local" placeholder="Date" className="w-fit border border-slate-300 rounded-md px-4 py-2" />
                            <span className="text-sm mb-2">Old Date: {formatDate(news[0].date)}</span>
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Image</p>
                            <CldUploadWidget
                                uploadPreset="GenBI Preset"
                                onSuccess={handleUpload}
                                onError={(error) => console.error("Upload Error:", error)}>
                                {({ open }: any) => (
                                    <button type="button" className="flex gap-4 justify-center items-center px-4 py-1 w-fit rounded-lg bg-toska-light text-center font-semibold text-slate-200 hover:text-white hover:bg-toska-dark hover:font-bold" onClick={() => open()}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z" />
                                            <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                        </svg>
                                        {news[0].image ? "Change Image" : "Upload Image"}
                                    </button>
                                )}
                            </CldUploadWidget>
                        </div>
                    </div>
                    <div className="w-4/5">
                        <p className="font-semibold">Description</p>
                        <textarea onChange={(e) => setNewsState({ ...newsState, description: e.target.value })} defaultValue={news[0].description} placeholder="Example Kesehatan Mental dan Revolusi Industri 4.0. Kinerja Optimal Menghadapi Dinamika Ekonomi Global" className="w-full min-h-52 border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                        <span className="text-sm">Deskripsi ini akan muncul di halaman news.</span>
                    </div>

                    <p className="font-semibold">Content</p>
                    <div className="h-fit bg-white">
                        <ReactQuill onChange={(e) => setNewsState({ ...newsState, content: e })} defaultValue={news[0].content} className="h-full bg-white" theme={options.theme} placeholder={options.placeholder} modules={options.modules} />
                    </div>
                    <span className="text-sm mb-2">Content ini akan menjadi tampilan blog berita, buat dengan format yang rapi layaknya sebuah artikel di internet</span>

                    <h2 className="my-6 text-2xl font-semibold">Meta Data for Optimize Search Engine</h2>

                    <div className="flex flex-wrap gap-4 w-full">

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">meta title</p>
                            <input onChange={(e) => setNewsState({ ...newsState, meta_title: e.target.value })} defaultValue={news[0].meta_title} type="text" placeholder="Example: Peluncuran Aplikasi GENBI UNISKA" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                            <span className="text-sm">
                                Meta title adalah judul halaman yang muncul di hasil pencarian.
                                Gunakan judul yang menarik dan relevan untuk meningkatkan klik dari hasil pencarian (Click Through Rate - CTR).
                            </span>
                        </div>
                        <div className="w-2/5">
                            <p className="font-semibold mb-1">meta author</p>
                            <input onChange={(e) => setNewsState({ ...newsState, meta_author: e.target.value })} defaultValue={news[0].meta_author} type="text" placeholder="Example: Divisi Kominfo GENBI UNISKA" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                            <span className="text-sm">
                                Meta author mencantumkan siapa yang membuat konten.
                                Memberikan kredibilitas pada konten, terutama untuk artikel atau berita.
                            </span>
                        </div>
                        <div className="w-4/5">
                            <p className="font-semibold mb-1">meta keywords</p>
                            <input onChange={(e) => setNewsState({ ...newsState, meta_keywords: e.target.value })} defaultValue={news[0].meta_keywords} type="text" placeholder="Example: GENBI, UNISKA, aplikasi GENBI, berita GENBI, peluncuran aplikasi" className="w-full border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
                            <span className="text-sm">
                                Meta keywords adalah kata kunci yang relevan dengan konten halaman.
                                Walaupun kurang digunakan oleh mesin pencari modern, tetap berguna untuk pengorganisasian internal.
                            </span>
                        </div>
                        <div className="w-4/5">
                            <p className="font-semibold mb-1">meta description</p>
                            <textarea onChange={(e) => setNewsState({ ...newsState, meta_description: e.target.value })} defaultValue={news[0].meta_description} placeholder="Example: GENBI UNISKA dengan bangga meluncurkan aplikasi terbaru untuk mempermudah akses informasi" className="w-full h-36 border border-slate-300 rounded-md px-4 py-2 focus:outline-1 focus:outline-toska-light" />
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
