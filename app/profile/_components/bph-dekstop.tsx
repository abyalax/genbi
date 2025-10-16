'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BPH } from '~/services/pengurus/type';

export const BPHDesktop = ({ BPH }: { BPH?: BPH }) => {
  const { internasionalisasi, kewirausahaan, kominfo, lingkungan, pendidikan, pengabdian } = BPH ?? {}
  const { push } = useRouter();

  return (
    <section className="ml:block hidden mt-4">
      <h2 className="text-3xl font-semibold text-[#1C8383] text-center mb-6">Badan Pengurus Harian</h2>
      <div className="flex flex-row justify-center">
        <div className=" bg-[#1C8383] text-white pt-1 pb-4 px-6 rounded-full">
          <h2 className="text-4xl text-center font-semibold font-mono">BPH</h2>
          <p>Badan Pengurus Harian</p>
        </div>
      </div>

      <div className="flex justify-center">
        <span className="h-10 w-0 border border-gray-500 mx-auto" />
      </div>

      <div className="flex justify-center w-full">
        <span className="h-0 w-full border border-gray-500 mx-auto" />
      </div>

      <div className="grid grid-cols-6 w-full">
        <span className="h-10 w-0 border border-gray-500 mx-auto" />
        <span className="h-10 w-0 border border-gray-500 mx-auto" />
        <span className="h-10 w-0 border border-gray-500 mx-auto" />
        <span className="h-10 w-0 border border-gray-500 mx-auto" />
        <span className="h-10 w-0 border border-gray-500 mx-auto" />
        <span className="h-10 w-0 border border-gray-500 mx-auto" />
      </div>

      <div className="grid grid-cols-6 w-full items-start">
        <div
          onClick={() => push(`/profile/divisi/${pendidikan?.ketua.divisi_id}`)}
          className="col-span-1 flex flex-col gap-1 justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4B5563"
            width="100"
            height="100"
            className="w-8 h-8 xxs:w-10 xxs:h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            viewBox="0 0 24 24"
          >
            <path d="M2 8v11.529S6.621 19.357 12 22c5.379-2.643 10-2.471 10-2.471V8s-5.454 0-10 2.471C7.454 8 2 8 2 8z"></path>
            <circle cx="12" cy="5" r="3"></circle>
          </svg>
          <h2 className="text-wrap text-center text-lg font-semibold mb-6">Pendidikan</h2>
          <ul className="flex flex-col gap-1 text-start mx-2">
            <Link href={`/profile/${pendidikan?.ketua.id}`} className="font-semibold">
              - {pendidikan?.ketua.name}
            </Link>
            {pendidikan?.anggota.map((e) => (
              <Link href={`/profile/${e.id}`} key={e.id}>
                - {e.name}
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={() => push(`/profile/divisi/${internasionalisasi?.ketua.divisi_id}`)}
          className="col-span-1 flex flex-col gap-1 justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4B5563"
            width="100"
            height="100"
            className="bi bi-briefcase-fill w-8 h-8 xxs:w-10 xxs:h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
          </svg>
          <h2 className="text-wrap text-center text-lg font-semibold mb-6">Internasionalisasi</h2>
          <ul className="flex flex-col gap-1 text-start mx-2">
            <Link href={`/profile/${internasionalisasi?.ketua.id}`} className="font-semibold">
              - {internasionalisasi?.ketua.name}
            </Link>
            {internasionalisasi?.anggota.map((e) => (
              <Link href={`/profile/${e.id}`} key={e.id}>
                - {e.name}
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={() => push(`/profile/divisi/${kewirausahaan?.ketua.divisi_id}`)}
          className="col-span-1 flex flex-col gap-1 justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4B5563"
            width="100"
            height="100"
            className="bi bi-briefcase-fill w-8 h-8 xxs:w-10 xxs:h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            viewBox="0 0 16 16"
          >
            <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
            <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
          </svg>
          <h2 className="text-wrap text-center text-lg font-semibold mb-6">Kewirausahaan</h2>
          <ul className="flex flex-col gap-1 text-start mx-2">
            <Link href={`/profile/${kewirausahaan?.ketua.id}`} className="font-semibold">
              - {kewirausahaan?.ketua.name}
            </Link>
            {kewirausahaan?.anggota.map((e) => (
              <Link href={`/profile/${e.id}`} key={e.id}>
                - {e.name}
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={() => push(`/profile/divisi/${lingkungan?.ketua.divisi_id}`)}
          className="col-span-1 flex flex-col gap-1 justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4B5563"
            width="100"
            height="100"
            className="w-8 h-8 xxs:w-10 xxs:h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            viewBox="0 0 24 24"
          >
            <path
              d="m22 3.41-.12-1.26-1.2.4a13.84 13.84 0 0 1-6.41.64 11.87 11.87 0 0 0-6.68.9A7.23 7.23 0 0 0 3.3 9.5a9 9 0 0 0 .39 4.58 16.6 16.6 0 
                            0 1 1.18-2.2 9.85 9.85 0 0 1 4.07-3.43 11.16 11.16 0 0 1 5.06-1A12.08 12.08 0 0 0 9.34 9.2a9.48 9.48 0 0 0-1.86 1.53 11.38 11.38 0 0 0-1.39
                            1.91 16.39 16.39 0 0 0-1.57 4.54A26.42 26.42 0 0 0 4 22h2a30.69 30.69 0 0 1 .59-4.32 9.25 9.25 0 0 0 4.52 1.11 11 11 0 0 0 4.28-.87C23 14.67 22 3.86 22 3.41z"
            ></path>
          </svg>
          <h2 className="text-wrap text-center text-lg font-semibold mb-6">Lingkungan Hidup</h2>
          <ul className="flex flex-col gap-1 text-start mx-2">
            <Link href={`/profile/${lingkungan?.ketua.id}`} className="font-semibold">
              - {lingkungan?.ketua.name}
            </Link>
            {lingkungan?.anggota.map((e) => (
              <Link href={`/profile/${e.id}`} key={e.id}>
                - {e.name}
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={() => push(`/profile/divisi/${kominfo?.ketua.divisi_id}`)}
          className="col-span-1 flex flex-col gap-1 justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4B5563"
            width="100"
            height="100"
            className="bi bi-info-circle-fill w-8 h-8 xxs:w-10 xxs:h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
          </svg>
          <h2 className="text-wrap text-center text-lg font-semibold mb-6">Komunikasi dan Informasi</h2>
          <ul className="flex flex-col gap-1 text-start mx-2">
            <Link href={`/profile/${kominfo?.ketua.id}`} className="font-semibold">
              - {kominfo?.ketua.name}
            </Link>
            {kominfo?.anggota.map((e) => (
              <Link href={`/profile/${e.id}`} key={e.id}>
                - {e.name}
              </Link>
            ))}
          </ul>
        </div>
        <div
          onClick={() => push(`/profile/divisi/${pengabdian?.ketua.divisi_id}`)}
          className="col-span-1 flex flex-col gap-1 justify-center items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#4B5563"
            width="100"
            height="100"
            className="bi bi-people-fill w-8 h-8 xxs:w-10 xxs:h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            viewBox="0 0 16 16"
          >
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
          </svg>
          <h2 className="text-wrap text-center text-lg font-semibold mb-6">Pengabdian Masyarakat </h2>
          <ul className="flex flex-col gap-1 text-start mx-2">
            <Link href={`/profile/${pengabdian?.ketua.id}`} className="font-semibold">
              - {pengabdian?.ketua.name}
            </Link>
            {pengabdian?.anggota.map((e) => (
              <Link href={`/profile/${e.id}`} key={e.id}>
                - {e.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
