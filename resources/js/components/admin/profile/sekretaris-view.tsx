import { Anggota } from "@/types/anggota";
import { FaEdit } from "react-icons/fa";
import { Link, router } from "@inertiajs/react";
import DefaultProfile from "@/components/ui/default-profile";

const SekretarisView = ({ sekretaris }: { sekretaris: Anggota[] }) => {

    return (
        sekretaris.map((sekretaris, index) => (
            <div key={index}>
                <h2 className="text-lg font-semibold my-2">Sekretaris {index + 1}</h2>
                <div className="p-4 m-4 border border-slate-300 rounded-lg">
                    <div className="flex justify-between">
                        <div className="flex gap-7">
                            {sekretaris.image ? (
                                <img className="w-36 h-36 object-cover object-center rounded-full" src={sekretaris.image as string} width={500} height={500} alt="Image Ketua" />
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
                                    <p>: {sekretaris.name}</p>
                                    <p>: {sekretaris.fakultas}</p>
                                    <p>: {sekretaris.prodi}</p>
                                    <p>: {sekretaris.semester}</p>
                                </div>
                            </div>
                        </div>
                        <Link href={`/admin/profile/${sekretaris.id}`} className="flex items-center gap-2 px-4 py-2 w-fit h-fit border-2 hover:border-b-4 border-slate-200 rounded-lg font-semibold hover:font-bold">
                            <FaEdit size={20} />
                            Update
                        </Link>
                    </div>
                    <form action="" encType="multipart/form-data" className="mt-3 w-fit">
                        <div className="relative flex flex-col gap-1 text-gray-600 hover:text-toska-light hover:font-bold">
                            <input id="fileInput" type="file" className="overflow-clip rounded-lg border border-slate-300 text-sm file:mr-4 file:border-none file:bg-neutral-50 file:px-2 file:py-2 file:font-medium file:text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-75" />
                        </div>
                    </form>
                </div>

                <h2 className="text-lg font-semibold my-6">Personal Information</h2>
                <div className="border border-slate-300 rounded-lg p-4 m-4 flex gap-9">
                    <div>
                        <h2 className="my-2 font-semibold">Nickname</h2>
                        <p className="mb-6">{sekretaris.name.split(' ')[0]}</p>
                        <h2 className="my-2 font-semibold">Email Address</h2>
                        <p className="mb-6">{sekretaris.email ?? '-'}</p>
                    </div>
                    <div>
                        <h2 className="my-2 font-semibold">Fullname</h2>
                        <p className="mb-6">{sekretaris.name}</p>
                        <h2 className="my-2 font-semibold">Phone</h2>
                        <p className="mb-6">{sekretaris.phone ?? '-'}</p>
                    </div>
                </div>
            </div>
        ))
    )
}

export default SekretarisView
