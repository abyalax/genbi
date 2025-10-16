
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed z-20 top-0 bg-[#1C8383] text-white w-full py-2 px-12">
    <div className="flex mml:justify-around justify-between items-center">

      <div className="flex gap-4">
        <Image src={"/assets/genbi/logo-genbi-polos.png"} alt="GenBI" width={100} height={100} className="w-16" />
        <h2 className="text-nowrap text-lg font-semibold my-auto">GENBI UNISKA</h2>
      </div>

      <ul className="mml:flex gap-4 hidden text-center">
        <li className="cursor-pointer hover:font-bold">
          <Link href={"/"}>Beranda</Link>
        </li>
        <li className="cursor-pointer hover:font-bold">
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li className="cursor-pointer hover:font-bold">
          <Link href={"/gallery"}>Gallery</Link>
        </li>
        <li className="cursor-pointer hover:font-bold">
          <Link href={"/news"}>News</Link>
        </li>
        <li className="cursor-pointer hover:font-bold">
          <Link href={"/agenda"}>Agenda</Link>
        </li>
      </ul>

      <div className="mml:block hidden">
        <button className="text-[#1C8383] bg-white px-4 py-2 rounded-md font-semibold hover:font-bold">
          <Link href="/#kontak">Hubungi Kami</Link>
        </button>
      </div>

      <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className={`bi bi-list ${open ? "hidden" : ""} mml:hidden cursor-pointer`} viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg>

      <div className={`${open ? "" : "hidden"} fixed min-w-full top-0 left-0 right-0 h-fit flex justify-between p-4 bg-[#1C8383] z-10`}>

        <ul className="flex flex-col gap-4">
          <li className="cursor-pointer hover:font-bold">
            <Link href={"/"}>Beranda</Link>
          </li>
          <li className="cursor-pointer hover:font-bold">
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li className="cursor-pointer hover:font-bold">
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li className="cursor-pointer hover:font-bold">
            <Link href={"/news"}>News</Link>
          </li>
          <li className="cursor-pointer hover:font-bold">
            <Link href={"/agenda"}>Agenda</Link>
          </li>
        </ul>

        <svg onClick={() => setOpen(!open)} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="cursor-pointer" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
        </svg>

      </div>

    </div>
  </nav>
  )
};

export default Navbar;