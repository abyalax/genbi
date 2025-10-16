import { ToasterContext } from "@/context/toaster";
import { Divisi, getDivisiByID } from "@/services/divisi";
import { useContext, useEffect } from "react";

export async function getServerSideProps({ params }: { params: { id: number } }) {
    try {
        const divisi = await getDivisiByID(params.id);
        return {
            props: { divisi }, 
        };
    } catch (error) {
        console.error("Error fetching divisi:", error); 
        return {
            props: { divisi: null, error: "Data tidak dapat ditemukan" }, 
        };
    }
}
const DivisiPage = ({ divisi, error }: { divisi: Divisi | null; error?: string }) => {
    const { setToaster } = useContext(ToasterContext);

    useEffect(() => {
        if (error) {
            setToaster({
                variant: "danger",
                message: error,
            })
        }
    }, [error, setToaster]);
    console.log({ divisi });
    

    if (!divisi) {
        return (
            <div className="w-screen h-screen flex justify-center items-center">
                <h2 className="text-3xl text-red-500">Data tidak ditemukan</h2>
            </div>
        );
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h2 className="text-6xl">Divisi {divisi.name}</h2>
            {divisi.anggota.map((e) => (
                <p key={e.id}>{e.name}</p>
            ))}
        </div>
    );
};

export default DivisiPage;
