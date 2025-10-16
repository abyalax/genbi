import AdminLayout from '@/components/admin/layouts';
import DefaultProfile from '@/components/ui/default-profile';
import { ToasterContext } from '@/context/toaster';
import fetchAxios from '@/lib/axios';
import { Anggota } from '@/types/anggota';
import { router } from '@inertiajs/react';
import { FormEvent, useContext, useRef } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

export default function EditAnggotaPage({ anggota }: { anggota: Anggota }) {
    const { setToaster } = useContext(ToasterContext)

    console.log(anggota);

    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        const formElement = formRef.current;
        const formData = new FormData(formElement);
        formData.append('_method', 'PATCH');
        console.log("Form Data : ", formData);
        await fetchAxios.post(`/api/admin/profile/${anggota.id}`, formData)
            .then(res => {
                console.log("Update Data : ", res.data);
                setToaster({
                    variant: "success",
                    message: "Update Data Berhasil",
                })
                router.visit("/admin/profile")
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
            <form onSubmit={handleSubmit} ref={formRef} className='px-8' encType='multipart/form-data'>
                <div className='mx-auto max-w-xl'>
                    <div className='mb-3'>
                        {anggota.image ? (
                            <img src={anggota.image as string} className='mx-auto rounded-full w-40 h-40 object-cover object-center' />
                        ) : (
                            <DefaultProfile />
                        )}
                        <button className='flex gap-2 items-center mx-auto'>
                            <FaCloudUploadAlt size={32} />
                            <p>Upload Profile</p>
                        </button>
                        <input type="file" name='image' className='hidden' />
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className="font-semibold mt-2">Nama</p>
                        <input className='w-full focus:outline-none py-1 px-2 rounded border border-slate-200' type="text" placeholder='Masukkan Nama' defaultValue={anggota.name} name='name' />
                        <p className="font-semibold mt-2">Email</p>
                        <input className='w-full focus:outline-none py-1 px-2 rounded border border-slate-200' type="email" placeholder='Masukkan Email ( e.g: usermail@gmail.com )' defaultValue={anggota.email} name='email' />
                        <p className="font-semibold mt-2">Phone</p>
                        <input className='w-full focus:outline-none py-1 px-2 rounded border border-slate-200' type="number" placeholder='Masukkan Nomor Handphone' defaultValue={anggota.phone} name='phone' />
                        <p className="font-semibold mt-2">Fakultas</p>
                        <input className='w-full focus:outline-none py-1 px-2 rounded border border-slate-200' type="text" placeholder='Masukkan Asal Fakultas' defaultValue={anggota.fakultas} name='fakultas' />
                        <p className="font-semibold mt-2">Prodi</p>
                        <input className='w-full focus:outline-none py-1 px-2 rounded border border-slate-200' type="text" placeholder='Masukkan Asal Prodi' defaultValue={anggota.prodi} name='prodi' />
                        <p className="font-semibold mt-2">Semester</p>
                        <input className='w-full focus:outline-none py-1 px-2 rounded border border-slate-200' type="number" placeholder='Masukkan semester' defaultValue={anggota.semester} name='semester' />
                        <p className="font-semibold mt-2">Jabatan</p>
                        <input className='w-full focus:outline-none py-1 px-2 rounded border border-slate-200' type="text" placeholder='Masukkan Jabatan di GenBI ( e.g: Chief Operating Officer atau anggota )' defaultValue={anggota.jabatan} name='jabatan' />
                    </div>
                    <button type="submit" className='my-4 bg-toska-light hover:bg-toska-dark text-white font-semibold hover:font-bold py-2 px-4 rounded'>
                        Simpan
                    </button>
                </div>
            </form>
        </AdminLayout>
    )
}
