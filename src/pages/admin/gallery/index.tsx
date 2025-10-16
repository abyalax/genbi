import Pagination from "@/component/pagination"
import AdminLayout from "../../../component/admin/__layout"
import Image from "next/image"

const page = [1, 2, 3, 4, 5]

const AdminGallery = () => {
  return (
    <AdminLayout>
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold my-4">Gallery Management</h2>
        <div className="flex gap-4">
          <button className="flex h-fit items-center gap-2 py-2 px-4 bg-transparent border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
            Add New Folder
          </button>
          <button className="flex h-fit items-center gap-2 py-2 px-4 bg-toska text-white hover:bg-toska-dark rounded-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708z" />
            </svg>
            Add New Assets
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-3 justify-center items-center gap-x-8 gap-y-4 p-6 w-full">

        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/a.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Operasi Pasar Murni</p>
        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/b.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Temu Responden 2024</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/c.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Undangan BI pada GenBI UNISKA</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/d.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Dokumentasi</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/e.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Operasi Pasar Murni</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/f.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Temu Responden 2024</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/a.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Undangan BI pada GenBI UNISKA</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/b.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Dokumentasi</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/c.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Operasi Pasar Murni</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/d.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Temu Responden 2024</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/e.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Undangan BI pada GenBI UNISKA</p>

        </div>
        <div className="col-span-1 w-72 h-56 bg-white rounded-md p-2 border-2 border-slate-200">
          <Image src="/assets/kegiatan/f.jpeg" alt="kegiatan" width={500} height={300} className="w-64 h-44 mx-auto object-cover object-center rounded-md" />
          <p className="text-center my-2 text-sm font-semibold">Dokumentasi</p>
        </div>

      </div>

      <div className="flex justify-center items-center w-full p-6 border-t-2 border-slate-300">
        <Pagination currentPage={1} totalPages={5} onPageChange={(page) => console.log(page)} />
      </div>
    </AdminLayout>
  )
}

export default AdminGallery
