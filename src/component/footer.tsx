import Link from "next/link";

const Footer = () => {
    return (
        <footer className="py-14 mt-12 bg-[#1B6060] flex flex-col justify-center items-center text-white -mb-6 relative">
            <p>Copyright 2024 © Univeritas Islam Kadiri</p>
            <p>Made by <Link href={"https://www.instagram.com/abya.xc/"}>Abya</Link></p>
            <Link href={"/admin"} className="absolute right-6 bottom-4">Ke Halaman Admin</Link>
        </footer>
    )
};

export default Footer;