import AdminLayout from "../../../component/admin/__layout"
import Link from "next/link"
import { getAllNews, News } from "@/services/news";
import dynamic from "next/dynamic";

const Table =  dynamic(() => import("@/component/table/Table"), { ssr: false })

export async function getServerSideProps() {
    const news = await getAllNews()
    return {
        props: { news },
    };
}

const AdminNews = ({ news }: {news: News[]}) => {

    return (
        <AdminLayout>
            <div className="flex gap-4 w-full justify-between my-4 pr-8">
                <h2 className="my-6 text-2xl font-semibold">News Management</h2>
                <button className="flex h-fit items-center gap-2 py-2 px-4 bg-toska text-white hover:bg-toska-dark rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
                        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
                    </svg>
                    <Link href={"/admin/news/create"} >
                        Add New Article
                    </Link>
                </button>
            </div>
            <main className="overflow-x-auto overflow-visible h-screen scrollbar-hidden">
                <div className="h-fit w-fit rounded-xl m-1">
                    <Table news={news}/>
                </div>
            </main>
        </AdminLayout>
    )
}

export default AdminNews