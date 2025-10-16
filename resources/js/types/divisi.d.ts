import { Anggota } from "./anggota";

interface DivisiSQL {
    id: number;
    name: string;
    leader: Anggota;
    visi: string | null;
    misi: string | null;
}

export interface Divisi extends DivisiSQL {
    anggota_reguler: Anggota[];
}
