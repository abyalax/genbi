import AdminLayout from "../../../../component/admin/__layout"
import { NamaAnggota } from "@/services/anggota"
import { CldImage } from "next-cloudinary"
import { getNewsBySlug, News } from "@/services/news"
import { formatDate } from "@/utils/convert-date"
import Image from "next/image"
import { validateImageExtension } from "@/utils/utils"
import QuillContent from "@/component/quill-content"

export async function getServerSideProps({ params }: { params: { slug: string } }) {
    const news: News[] = await getNewsBySlug(params.slug)
    return {
        props: { news },
    };
}

const DetailNews = ({ anggota, news }: { anggota: NamaAnggota[], news: News[] }) => {

    return (
        <AdminLayout>
            <div className="flex flex-col text-gray-700 mb-96 items-center">
                <h2 className="my-6 text-2xl font-semibold">Detail News</h2>
                {news[0].image && validateImageExtension(news[0].image) && (
                    <Image alt="" width={800} height={500} src={news[0].image} className="w-full object-cover object-center" />
                )}

                {news[0].image !== undefined && (
                    <div className="w-full mb-12">
                        <CldImage alt="" src={news[0].image} width={500} height={300} className="mx-auto" />
                    </div>
                )}

                <div className="flex flex-col gap-2 w-full">
                    <div className="flex flex-wrap gap-2 w-full justify-end">

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Title</p>
                            <p>{news[0].title}</p>
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Slug</p>
                            <p>{news[0].slug}</p>
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Category</p>
                            <p>{news[0].slug}</p>
                        </div>

                        <div className="w-2/5">
                            <p className="font-semibold mb-1">Author</p>
                            <p>{news[0].author}</p>
                        </div>

                        <div className="w-2/5 flex flex-col">
                            <p className="font-semibold mb-1">Date</p>
                            <p>{formatDate(news[0].date)}</p>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center px-36">
                        <p className="font-semibold">Description</p>
                        <p className="text-justify">{news[0].description}</p>
                    </div>

                    <h2 className="text-xl mt-8 font-semibold text-center">Content</h2>

                    <div className="h-fit">
                        <QuillContent content={news[0].content} />
                    </div>

                    <h2 className="my-6 text-2xl font-semibold text-center">Meta Data for Optimize Search Engine</h2>
                    <div className="flex flex-wrap gap-4 w-full justify-end">

                        <div className="w-1/5">
                            <p className="font-semibold mb-1">meta title</p>
                            <p>{news[0].meta_title}</p>
                        </div>
                        <div className="w-2/5">
                            <p className="font-semibold mb-1">meta author</p>
                            <p>{news[0].meta_author}</p>
                        </div>
                        <div className="w-4/5">
                            <p className="font-semibold mb-1">meta keywords</p>
                            <p>{news[0].meta_keywords}</p>
                        </div>
                        <div className="w-4/5">
                            <p className="font-semibold mb-1">meta description</p>
                            <p>{news[0].meta_description}</p>
                        </div>
                    </div>

                </div>
                <button className="flex h-fit w-fit items-center gap-2 py-2 px-4 my-4 bg-toska text-white hover:bg-toska-dark rounded-md disabled:cursor-not-allowed disabled:opacity-50">
                    DO Something
                </button>

            </div >
        </AdminLayout >

    )
}


export default DetailNews
