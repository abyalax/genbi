import AdminLayout from '@/component/admin/__layout';
import { ToasterContext } from '@/context/toaster';
import fetchAxios from '@/lib/axios';
import { Anggota, getAnggotaByID } from '@/services/anggota';
import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from 'next-cloudinary';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';

export async function getServerSideProps({ params }: { params: { id: number } }) {
    const getData: Anggota[] = await getAnggotaByID(params.id)
    const anggota: Anggota = getData[0]
    return {
        props: { anggota },
    };
}

const UpdateAnggota = ({ anggota }: { anggota: Anggota }) => {
    const { setToaster } = useContext(ToasterContext)
    const { push } = useRouter()
    const [formState, setForm] = useState({
        id: anggota.id,
        name: anggota.name,
        email: anggota.email,
        phone: anggota.phone,
        fakultas: anggota.fakultas,
        prodi: anggota.prodi,
        image: anggota.image,
        semester: anggota.semester,
        jabatan: anggota.jabatan,
    })

    const handleUpload = async (result: CloudinaryUploadWidgetResults) => {
        const resultUpload = result.info as CloudinaryUploadWidgetInfo
        const image = resultUpload.secure_url
        console.log("Succes Upload Image", image);
        setForm(prevState => ({
            ...prevState,
            image,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form State to Submit : ", formState);
        const updateData = fetchAxios.put("/api/anggota", formState)
        updateData.then(res => {
            console.log("Update Data : ", res.data);
            setToaster({
                variant: "success",
                message: "Update Data Berhasil",
            })
            push("/admin/profile")
        }).catch(err => {
            setToaster({
                variant: "danger",
                message: "Gagal Update Data, Silahkan Coba Lagi",
            })
            console.log("Update Data : ", err)
        });
    }

    return (
        <AdminLayout>
            <h2 className="text-2xl font-semibold my-8">Update Anggota</h2>
            <form onSubmit={handleSubmit} className='px-8'>
                <div className='flex flex-col gap-1 w-full'>
                    <p className="font-semibold mt-2">Nama</p>
                    <input onChange={(e) => setForm({ ...formState, name: e.target.value })} className='w-1/2 focus:outline-none py-1 px-2 rounded border border-slate-200' type="text" placeholder='Masukkan Nama' defaultValue={anggota.name} />
                    <p className="font-semibold mt-2">Email</p>
                    <input onChange={(e) => setForm({ ...formState, email: e.target.value })} className='w-1/2 focus:outline-none py-1 px-2 rounded border border-slate-200' type="email" placeholder='Masukkan Email ( e.g: usermail@gmail.com )' defaultValue={anggota.email} />
                    <p className="font-semibold mt-2">Phone</p>
                    <input onChange={(e) => setForm({ ...formState, phone: e.target.value })} className='w-1/2 focus:outline-none py-1 px-2 rounded border border-slate-200' type="number" placeholder='Masukkan Nomor Handphone' defaultValue={anggota.phone} />
                    <p className="font-semibold mt-2">Fakultas</p>
                    <input onChange={(e) => setForm({ ...formState, fakultas: e.target.value })} className='w-1/2 focus:outline-none py-1 px-2 rounded border border-slate-200' type="text" placeholder='Masukkan Asal Fakultas' defaultValue={anggota.fakultas} />
                    <p className="font-semibold mt-2">Prodi</p>
                    <input onChange={(e) => setForm({ ...formState, prodi: e.target.value })} className='w-1/2 focus:outline-none py-1 px-2 rounded border border-slate-200' type="text" placeholder='Masukkan Asal Prodi' defaultValue={anggota.prodi} />
                    <p className="font-semibold mt-2">Semester</p>
                    <input onChange={(e) => setForm({ ...formState, semester: parseInt(e.target.value) })} className='w-1/2 focus:outline-none py-1 px-2 rounded border border-slate-200' type="number" placeholder='Masukkan semester' defaultValue={anggota.semester} />
                    <p className="font-semibold mt-2">Jabatan</p>
                    <input onChange={(e) => setForm({ ...formState, jabatan: e.target.value })} className='w-1/2 focus:outline-none py-1 px-2 rounded border border-slate-200' type="text" placeholder='Masukkan Jabatan di GenBI ( e.g: Chief Operating Officer atau anggota )' defaultValue={anggota.jabatan} />
                    <div className='h-16 mb-4'>
                        <p className="font-semibold mt-2">Foto Profile</p>
                        <CldUploadWidget
                            uploadPreset="GenBI Preset"
                            onSuccess={handleUpload}
                            onError={(error) => console.error("Upload Error:", error)}>
                            {({ open }) => (
                                <button type="button" className="flex gap-4 justify-center items-center px-4 py-1 w-fit rounded-lg text-center font-semibold border-b-4 border-t border-r-2 border-l border-slate-400 hover:border-b hover:border-r" onClick={() => open()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708z" />
                                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                    </svg>
                                    Unggah Foto
                                </button>
                            )}
                        </CldUploadWidget>
                    </div>
                </div>

                <button type="submit" className='my-4 bg-toska-light hover:bg-toska-dark text-white font-semibold hover:font-bold py-2 px-4 rounded'>
                    Simpan
                </button>
            </form>
        </AdminLayout>
    )
}

export default UpdateAnggota
