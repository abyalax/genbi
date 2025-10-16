import { Divisi } from "@/types/divisi";

const DivisiPage = ({ divisi }: { divisi: Divisi }) => {
    console.log({ divisi });
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h2 className="text-6xl">Divisi {divisi.name}</h2>
            <p>{divisi.leader.name} (Ketua) </p>
            {divisi.anggota_reguler.map((e) => (
                <p key={e.id}>{e.name}</p>
            ))}
        </div>
    );
};

export default DivisiPage;
