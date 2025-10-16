import DefaultProfile from "@/components/ui/default-profile";
import { Anggota } from "@/types/anggota"
import { Link, router } from "@inertiajs/react";
import { FaEdit } from "react-icons/fa";

const BendaharaView = ({ bendahara }: { bendahara: Anggota[] }) => {

    return (
        bendahara.map((bendahara, index) => (
            <div key={index}>
                <h2 className="text-lg font-semibold my-2">Bendahara {index + 1}</h2>

                <div className="p-4 m-4 border border-slate-300 rounded-lg">
                    <div className="flex justify-between">
                        <div className="flex gap-7">
                            {bendahara.image ? (
                            <img className="w-36 h-36 object-cover object-center rounded-full" src={bendahara.image} width={500} height={500} alt="Image Ketua" />
                            ) : (
                                <DefaultProfile size="md" />
                            )}
                            <div className="flex gap-4 border-slate-300 rounded-lg p-2">
                                <div className="flex flex-col gap-2 ">
                                    <h2 className="font-semibold">Nama</h2>
                                    <h2 className="font-semibold">Fakultas</h2>
                                    <h2 className="font-semibold">Prodi</h2>
                                    <h2 className="font-semibold">Semester</h2>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <p>: {bendahara.name}</p>
                                    <p>: {bendahara.fakultas}</p>
                                    <p>: {bendahara.prodi}</p>
                                    <p>: {bendahara.semester}</p>
                                </div>
                            </div>
                        </div>
                        <Link href={`/admin/profile/${bendahara.id}`} className="flex items-center gap-2 px-4 py-2 w-fit h-fit border-2 hover:border-b-4 border-slate-200 rounded-lg font-semibold hover:font-bold">
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
                    <div className="w-1/3">
                        <h2 className="my-2 font-semibold">Nickname</h2>
                        <p className="mb-6">{bendahara.name.split(" ")[0]}</p>
                        <h2 className="my-2 font-semibold">Email Address</h2>
                        <p className="mb-6">{bendahara.email}</p>
                    </div>
                    <div className="w-2/3">
                        <h2 className="my-2 font-semibold">Fullname</h2>
                        <p className="mb-6">{bendahara.name}</p>
                        <h2 className="my-2 font-semibold">Phone</h2>
                        <p className="mb-6">{bendahara.phone}</p>
                    </div>
                </div>
            </div>
        ))
    )
}

export default BendaharaView
