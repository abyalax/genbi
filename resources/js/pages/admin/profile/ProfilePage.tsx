import { useMemo, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { Anggota } from "@/types/anggota";
import { BPH, Kepengurusan } from "@/types/profile";
import SidebarNavigation from "@/components/admin/routes";
import { Link, router } from "@inertiajs/react";
import AdminLayout from "@/components/admin/layouts";
import AdminBPH from "@/components/admin/profile/admin-bph";
import SekretarisView from "@/components/admin/profile/sekretaris-view";
import BendaharaView from "@/components/admin/profile/bendahara-view";
import DefaultProfile from "@/components/ui/default-profile";

interface DynamicBPH {
    ketua: Anggota;
    anggota: Anggota[];
}

export default function ProfilePage({ kepengurusan, bph }: { kepengurusan: Kepengurusan, bph: BPH }) {
    const routes = SidebarNavigation().routesGovernance
    const routesGovernance = useMemo(() => routes, [routes])

    const [path, setPath] = useState(routesGovernance.primary[0].path)
    const [divisi, setDivisi] = useState(routesGovernance.bph[0].path)
    const [title, setTitle] = useState(routesGovernance.primary[0].name)
    const [hide, setHide] = useState(false)

    const dynamicKepengurusan: Anggota[] = kepengurusan[path as keyof Kepengurusan] || [];
    const dynamicBPH: DynamicBPH = bph[divisi as keyof BPH] || [];

    const { name, fakultas, prodi, image, semester, id, email, phone } = dynamicKepengurusan[0]

    return (
        <AdminLayout>
            <h2 className="text-2xl font-semibold my-8 fixed">GenBI Governance Structure </h2>
            <main className="flex gap-6">
                <aside className="w-[22rem] h-fit bg-white p-2 rounded-lg fixed top-32">
                    <nav className="flex flex-col gap-2">
                        {routesGovernance?.primary?.map((route, index) => (
                            <button key={index} onClick={() => { setPath(route.path); setTitle(route.name) }} className={`flex items-center gap-2 px-4 py-2 mr-28 text-lg hover:bg-slate-200 ${route.name === path ? "bg-toska text-white hover:bg-toska-dark" : ""} w-full cursor-pointer rounded`}>
                                {route.name}
                            </button>
                        ))}

                        <button className="flex items-center justify-between px-4 py-2 text-lg hover:bg-slate-200 ">
                            BPH
                            <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setHide(!hide); setTitle("Divisi Pendidikan") }} width="20" height="20" strokeWidth={.5} stroke="black" fill="currentColor" className={`bi bi-chevron-up ${hide ? "rotate-180" : "rotate-90"}`} viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
                            </svg>
                        </button>

                        {hide && routesGovernance?.bph?.map((route, index) => (
                            <button key={index} onClick={() => { setDivisi(route.path); setTitle(`Divisi ${route.name}`) }} className={`flex items-center gap-2 px-4 py-2 text-lg hover:bg-slate-200 ${`Divisi ${route.name}` === title ? "bg-toska text-white hover:bg-toska-dark" : ""} w-full cursor-pointer rounded`}>
                                <div className="w-4 h-4">
                                    {route.icon}
                                </div>
                                {route.name}
                            </button>
                        ))}
                    </nav>
                </aside>

                {hide && title.includes("Divisi") ? (
                    <div>
                        <AdminBPH member={dynamicBPH.anggota} ketua={dynamicBPH.ketua} divisi={title} />
                    </div>
                ) : (
                    <main className="pl-[25rem] pt-20 w-full">
                        <div className="rounded-lg bg-white p-4">
                            <h2 className="text-xl font-semibold">Profile {title}</h2>
                            {path.includes("sekretaris") || path.includes("bendahara") ? (
                                path === "sekretaris" ? (
                                    <SekretarisView sekretaris={dynamicKepengurusan as Anggota[]} />
                                ) : (
                                    <BendaharaView bendahara={dynamicKepengurusan as Anggota[]} />
                                )
                            ) : (
                                <>
                                    <div className="p-4 m-4 border border-slate-300 rounded-lg">
                                        <div className="flex justify-between">
                                            <div className="flex gap-7">
                                                {image ? (
                                                    <img className="w-36 h-36 object-cover object-center rounded-full" src={image as string} width={500} height={500} alt="Image Ketua" />
                                                ) : (
                                                    <DefaultProfile />
                                                )}
                                                <div className="flex gap-4 border-slate-300 rounded-lg p-2">
                                                    <div className="flex flex-col gap-2 ">
                                                        <h2 className="font-semibold">Nama</h2>
                                                        <h2 className="font-semibold">Fakultas</h2>
                                                        <h2 className="font-semibold">Prodi</h2>
                                                        <h2 className="font-semibold">Semester</h2>
                                                    </div>
                                                    <div className="flex flex-col gap-2">
                                                        <p>: {name ?? 'undefined'}</p>
                                                        <p>: {fakultas} </p>
                                                        <p>: {prodi}</p>
                                                        <p>: {semester}</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <Link href={`/admin/profile/${id}`} className="flex items-center gap-2 px-4 py-2 w-fit h-fit border-2 hover:border-b-4 border-slate-200 rounded-lg font-semibold hover:font-bold">
                                                <FaEdit size={20} />
                                                Update
                                            </Link>
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-semibold my-6">Personal Information</h2>
                                    <div className="border border-slate-300 rounded-lg p-4 m-4 flex gap-9">
                                        <div className="w-1/3">
                                            <h2 className="my-2 font-semibold">Nickname</h2>
                                            <p className="mb-6">{name ? name.split(" ")[0] : "-"}</p>
                                            <h2 className="my-2 font-semibold">Email Address</h2>
                                            <p className="mb-6">{email}</p>
                                        </div>
                                        <div className="w-2/3">
                                            <h2 className="my-2 font-semibold">Fullname</h2>
                                            <p className="mb-6">{name}</p>
                                            <h2 className="my-2 font-semibold">Phone</h2>
                                            <p className="mb-6">{phone}</p>
                                        </div>
                                    </div>
                                </>
                            )
                            }
                        </div>
                    </main>
                )}
            </main>

        </AdminLayout>
    )
}
