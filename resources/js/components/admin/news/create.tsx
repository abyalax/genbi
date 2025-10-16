import { QuillOptions } from "react-quill"
import { FormEvent, useContext, useEffect, useRef, useState } from "react"
import { ToasterContext } from "@/context/toaster"
import { News } from "@/types/news"
import { router } from "@inertiajs/react"
import ReactQuill from "react-quill"
import fetchAxios from "@/lib/axios"

const options: QuillOptions = {
    modules: {
        toolbar: true
    },
    placeholder: "Write something awesome like at Microsoft Word...",
    theme: "snow"
}
export default function CreateNews({ id, name }: { id: number, name: string }) {
    const [loading, setLoading] = useState<boolean>(false)
    const { setToaster } = useContext(ToasterContext)
    const [listName, setListName] = useState<{ id: number, name: string }[]>();
    const content = useRef<string>('');
    const formRef = useRef<HTMLFormElement>(null);

    const fetchListName = async () => {
        await fetchAxios.get("/api/admin/anggota/name")
            .then(res => {
                setListName(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        fetchListName()
        return () => setListName(undefined)
    }, []);


    const handleCreateNews = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true)
        if (!formRef.current) return;
        const formElement = formRef.current;
        const formData = new FormData(formElement);
        formData.append('content', content.current);
        formData.append('author_id', id.toString());
        if (!formData.get("slug")) {
            formData.set("slug",
                (formData.get("title") as string).toLowerCase().replaceAll(" ", "-")
            );
        }
        await fetchAxios.post(`/api/admin/news`, formData)
            .then(res => {
                setToaster({ variant: "success", message: "Success Create News" })
                setLoading(false)
                router.visit("/admin/news")
                return
            })
            .catch(err => {
                setToaster({ variant: "danger", message: "Failed Create News" })
                setLoading(false)
                console.log(err)
            })
    }

    return (
        <div className="flex flex-col text-gray-700 mb-96">
            <form ref={formRef} className="flex flex-col gap-2">
                <div className="flex flex-wrap gap-4 w-full">

                    <div className="w-2/5">
                        <p className="font-semibold mb-1">Title</p>
                        <input type="text" name="title" placeholder="Example: Temu Responden 2024" className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-1 focus:outline-toska-light" />
                    </div>

                    <div className="w-2/5">
                        <p className="font-semibold mb-1">
                            Slug
                        </p>
                        <input type="text" name="slug" placeholder="Example: temu-responden-2024" className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-1 focus:outline-toska-light" />
                    </div>

                    <div className="w-2/5">
                        <p className="font-semibold mb-1">Category</p>
                        <input type="text" name="category" placeholder="Example Category : Proker Genbi" className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-1 focus:outline-toska-light" />
                    </div>

                    <div className="w-2/5">
                        <p className="font-semibold mb-1">Author</p>
                        <select defaultValue={id} name="author" className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm cursor-pointer">
                            <option value={id}>{name}</option>
                            {listName?.map(e => (
                                <option key={e.id} value={e.id}>{e.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="w-2/5">
                        <p className="font-semibold mb-1">Date</p>
                        <input type="datetime-local" name="date" placeholder="Date" className="w-fit border border-slate-300 rounded-md px-2 py-1 text-sm" />
                    </div>

                    <div className="w-2/5">
                        <p className="font-semibold mb-1">Image</p>
                        <input type="file" name="image" className="text-sm" />
                    </div>
                </div>
                <div className="w-4/5">
                    <p className="font-semibold">Description</p>
                    <input type="text" name="description" placeholder="Example Kesehatan Mental dan Revolusi Industri 4.0. Kinerja Optimal Menghadapi Dinamika Ekonomi Global" className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-1 focus:outline-toska-light" />
                </div>

                <p className="font-semibold mb-1">Content</p>
                <div className="h-fit bg-white">
                    <ReactQuill onChange={e => content.current = e} className="h-full bg-white" theme={options.theme} placeholder={options.placeholder} modules={options.modules} />
                </div>

                <h2 className="my-6 text-2xl font-semibold">Meta Data for Optimize Search Engine</h2>

                <div className="flex flex-wrap gap-4 w-full">

                    <div className="w-2/5">
                        <p className="font-semibold mb-1">meta title</p>
                        <input type="text" name="meta_title" placeholder="Example: Peluncuran Aplikasi GENBI UNISKA" className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-1 focus:outline-toska-light" />
                        <span className="text-sm">
                            Meta title adalah judul halaman yang muncul di hasil pencarian.
                            Gunakan judul yang menarik dan relevan untuk meningkatkan klik dari hasil pencarian (Click Through Rate - CTR).
                        </span>
                    </div>
                    <div className="w-2/5">
                        <p className="font-semibold mb-1">meta author</p>
                        <input type="text" name="meta_author" placeholder="Example: Divisi Kominfo GENBI UNISKA" className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-1 focus:outline-toska-light" />
                        <span className="text-sm">
                            Meta author mencantumkan siapa yang membuat konten.
                            Memberikan kredibilitas pada konten, terutama untuk artikel atau berita.
                        </span>
                    </div>
                    <div className="w-4/5">
                        <p className="font-semibold mb-1">meta keywords</p>
                        <input type="text" name="meta_keywords" placeholder="Example: GENBI, UNISKA, aplikasi GENBI, berita GENBI, peluncuran aplikasi" className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-1 focus:outline-toska-light" />
                        <span className="text-sm">
                            Meta keywords adalah kata kunci yang relevan dengan konten halaman.
                            Walaupun kurang digunakan oleh mesin pencari modern, tetap berguna untuk pengorganisasian internal.
                        </span>
                    </div>
                    <div className="w-4/5">
                        <p className="font-semibold mb-1">meta description</p>
                        <input type="text" name="meta_description" placeholder="Example: GENBI UNISKA dengan bangga meluncurkan aplikasi terbaru untuk mempermudah akses informasi" className="w-full border border-slate-300 rounded-md px-2 py-1 text-sm focus:outline-1 focus:outline-toska-light" />
                        <span className="text-sm">
                            Meta description adalah ringkasan singkat konten yang ditampilkan di hasil pencarian.
                            Menulis deskripsi yang jelas dan menarik dapat meningkatkan CTR dan menarik pengunjung.
                        </span>
                    </div>
                </div>
            </form>
            <button disabled={loading} onClick={handleCreateNews} className="flex h-fit w-fit items-center gap-2 py-2 px-4 my-4 bg-toska text-white hover:bg-toska-dark rounded-md disabled:cursor-not-allowed disabled:opacity-50">
                {loading ? 'Loading...' : 'Submit'}
            </button>
        </div>
    )
}
