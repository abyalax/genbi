import { Anggota } from "@/services/anggota";
import Image from "next/image";
import SidebarNavigation from "../__routes";
import { useRouter } from "next/router";
import { useMemo } from "react";

const AdminBPH = ({ member, divisi, ketua }: { member: Anggota[], divisi: string, ketua: Anggota }) => {

    const { routesGovernance } = SidebarNavigation()
    const { push } = useRouter()
    const data = useMemo(() => {
        const icon = routesGovernance.bph.find((e) => e.name === divisi.split("Divisi ")[1])?.icon || null
        return { icon }
    }, [divisi, routesGovernance.bph])

    return (
        <main className="pl-[25rem] pt-20">
            <div className="w-full rounded-lg bg-white p-4">
                <h2 className="text-xl font-semibold">Profile {divisi}</h2>
                <div className="flex  gap-7 p-4 m-4 border border-slate-300 rounded-lg">

                    <div className="flex flex-col items-center w-full">
                        <div className="w-36 h-36 flex justify-center items-start">
                            {data.icon}
                        </div>
                        <h2 className="text-lg font-semibold font-serif">{ketua.name}</h2>
                        <p>Chief Operating Officer ( CO )</p>
                        <div className="w-full px-8 py-2">
                            <h2 className="text-lg font-semibold">Visi</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla maiores hic.</p>

                            <h2 className="text-lg font-semibold mt-4">Misi</h2>
                            <ul>
                                <li className="flex gap-4 items-start my-2 text-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-check-circle flex-shrink-0 mt-2" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                    </svg>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla maiores hic.
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla maiores hic.
                                </li>
                                <li className="flex gap-4 items-center my-2 text-wrap">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-check-circle flex-shrink-0 mt-2" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                        <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                                    </svg>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nulla maiores hic.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h2 className="text-xl font-semibold my-6">Member Information</h2>

                <div className="border border-slate-300 rounded-lg p-4 m-4 flex gap-9">
                    <div className="flex flex-col items-center w-full">
                        <div className="w-full p-2">
                            <h2 className="text-lg font-semibold">Chief Operating Officer</h2>
                            <ul className="mb-4 hover:bg-slate-300 cursor-pointer rounded-lg" onClick={() => push(`/admin/profile/${ketua.id}`)}>
                                <li className="my-2 flex justify-between border-b border-slate-300 p-2">
                                    <div className="flex gap-4">
                                        <Image src={ketua.image ? ketua.image : "/assets/img/profile.jpg"} alt="" width={200} height={200} className="object-cover object-center w-20 h-20 aspect-square rounded-full" />
                                        <div className="">
                                            <h2 className="font-semibold">{ketua.name}</h2>
                                            <p className="text-sm">{ketua.fakultas}</p>
                                            <p className="text-sm">{ketua.prodi}</p>
                                        </div>
                                    </div>
                                    <span className="font-semibold text-sm px-2 py-1 bg-slate-300 w-fit h-fit rounded-lg">Semester {ketua.semester}</span>
                                </li>
                            </ul>
                            <h2 className="mt-6 text-lg font-semibold">Member</h2>
                            <ul>
                                {member.map((e, index) => (
                                    <li key={index} className="my-2 flex justify-between border-b border-slate-300 p-2 cursor-pointer hover:bg-slate-300 rounded-lg" onClick={() => push(`/admin/profile/${e.id}`)}>
                                        <div className="flex gap-4" >
                                            <Image src={e.image ? e.image : "/assets/img/profile.jpg"} alt="" width={200} height={200} className="object-cover object-center w-20 h-20 aspect-square rounded-full" />
                                            <div className="">
                                                <h2 className="font-semibold">{e.name}</h2>
                                                <p className="text-sm">{e.fakultas}</p>
                                                <p className="text-sm">{e.prodi}</p>
                                            </div>
                                        </div>
                                        <span className="font-semibold text-sm px-2 py-1 bg-slate-300 w-fit h-fit rounded-lg">Semester {e.semester}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default AdminBPH