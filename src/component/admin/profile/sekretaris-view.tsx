import { Anggota } from "@/services/anggota";
import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary";
import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import { FaEdit } from "react-icons/fa";

const SekretarisView = ({ sekretaris }: { sekretaris: Anggota[] }) => {

    const router = useRouter();

    const saveImageToProfile = async (image: string, id: number) => {
        try {
            const res = await fetch("/api/cloudinary", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ image, id }),
            });
            const data = await res.json();
            console.log(data);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    }

    const handleUpload = async (result: CloudinaryUploadWidgetResults, id: number) => {
        const resultUpload = result.info as CloudinaryUploadWidgetInfo
        const image = resultUpload.secure_url
        saveImageToProfile(image, id)
    };

    const handleOnClose = () => {
        router.replace(router.asPath);
    }

    return (
        sekretaris.map((sekretaris, index) => (
            <div key={index}>
                <h2 className="text-lg font-semibold my-2">Sekretaris {index + 1}</h2>
                <div className="flex justify-between p-4 m-4 border border-slate-300 rounded-lg">
                    <div className="flex gap-7">
                        <div>
                            <Image className="w-36 h-36 object-cover object-center rounded-full" src={sekretaris.image ? sekretaris.image : "/assets/dummy/1.jpg"} width={500} height={500} alt="Image Ketua" />
                            <CldUploadWidget
                                uploadPreset="GenBI Preset"
                                onSuccess={(result) => handleUpload(result, sekretaris.id)}
                                onClose={handleOnClose}
                                onError={(error) => console.error("Upload Error:", error)}>
                                {({ open }: any) => (
                                    <button type="button" className="text-center w-full font-semibold text-gray-600 hover:text-toska-light hover:font-bold" onClick={() => open()}>
                                        Upload Foto
                                    </button>
                                )}
                            </CldUploadWidget>
                        </div>
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

                <h2 className="text-lg font-semibold my-6">Personal Information</h2>
                <div className="border border-slate-300 rounded-lg p-4 m-4 flex gap-9">
                    <div>
                        <h2 className="my-2 font-semibold">Nickname</h2>
                        <p className="mb-6">Abie</p>
                        <h2 className="my-2 font-semibold">Email Address</h2>
                        <p className="mb-6">abie@gmail.com</p>
                    </div>
                    <div>
                        <h2 className="my-2 font-semibold">Fullname</h2>
                        <p className="mb-6">Abie Budi Pangestiko</p>
                        <h2 className="my-2 font-semibold">Phone</h2>
                        <p className="mb-6">08113616263</p>
                    </div>
                </div>
            </div>
        ))
    )
}

export default SekretarisView