import Link from "next/link"
import { ReactNode } from "react"
import SidebarNavigation from "./__routes"
import { signOut } from "next-auth/react"

const AdminLayout = ({ children }: { children: ReactNode }) => {
    const { routesDashboard } = SidebarNavigation() || []
    return (
        <section className="flex w-full min-h-screen text-gray-700">

            <aside className="w-fit flex flex-col justify-between bg-white p-3 h-screen fixed">
                <div className="pt-8 px-4">
                    <h2 className="font-bold text-2xl">GenBI UNISKA</h2>
                    <p className="font-semibold text-gray-500 text-nowrap">Content Management System</p>

                    <nav className="flex flex-col gap-2 mt-4 p-4">
                        {routesDashboard.map((route, index) => (
                            <Link key={index} href={route.path} className={`flex items-center gap-2 px-4 py-2 text-lg hover:bg-slate-200 ${route.active ? "bg-toska text-white hover:bg-toska-dark" : ""} w-full cursor-pointer rounded`}>
                                {route.icon}
                                {route.name}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="border-t border-slate-200 flex justify-center items-center p-4 w-full">
                    <button onClick={() => signOut({ callbackUrl: "/" })} className="flex items-center justify-center gap-4 py-2 w-full text-lg bg-toska-light text-white hover:bg-red-500 rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" strokeWidth={.5} stroke="currentColor" height="24" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                            <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z" />
                        </svg>
                        Logout
                    </button>
                </div>

            </aside>

            <main className="min-w-full bg-[#edf0f7] min-h-full py-6 pr-6 pl-72">
                {children}
            </main>

        </section>
    )
}

export default AdminLayout
