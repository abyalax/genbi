import query from "@/database/db";
import { Anggota } from "../anggota";

interface DivisiSQL {
    id: number;
    name: string;
    leader: string;
    visi: string | null;
    misi: string | null;
}

export interface Divisi extends DivisiSQL {
    anggota: Anggota[];
}

export const getDivisiByID = async (id: number): Promise<Divisi> => {
    const divisi = await query<DivisiSQL[]>("SELECT * FROM divisi WHERE id = ?;", [id]);
    const anggota = await query<Anggota[]>("SELECT * FROM anggota WHERE divisi_id = ?;", [id]);
    if (divisi.length === 0) {
        throw new Error("Divisi not found");
    }
    if (anggota.length === 0) {
        throw new Error("Anggota not found");
    }
    const result = {
        id: divisi[0].id,
        name: divisi[0].name,
        leader: divisi[0].leader,
        visi: divisi[0].visi,
        misi: divisi[0].misi,
        anggota: anggota,
    }
    return result;
}

/**
 * 1 = ID Divisi Kominfo  
 * 2 = ID Divisi Internasionalisasi 
 * 3 = ID Divisi Pendidikan 
 * 4 = ID Divisi Lingkungan Hidup 
 * 5 = ID Divisi Pengabdian Masyarakat 
 * 6 = ID Divisi Kewirausahaan 
 */
export const getAnggotaDivisiByID = async (id: number): Promise<{ ketua: Anggota; anggota: Anggota[] }> => {
    const ketuaQuery = `
        SELECT * 
        FROM anggota
        WHERE divisi_id = ? AND jabatan = 'Chief Operating Officer'
        LIMIT 1;
    `;
    const anggotaQuery = `
        SELECT * 
        FROM anggota
        WHERE divisi_id = ? AND jabatan != 'Chief Operating Officer';
    `;
    const [ketua] = await query<Anggota[]>(ketuaQuery, [id]); 
    const anggota = await query<Anggota[]>(anggotaQuery, [id]);
    return {
        ketua,
        anggota,
    };
};

