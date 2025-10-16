import query from "@/database/db";

export interface Anggota {
    id: number;
    name: string;
    email?: string;
    phone?: string;
    fakultas?: string;
    prodi?: string;
    image?: string;
    semester?: number;
    jabatan?: string;
    divisi_id?: number;
}

export const getAllAnggota = async (): Promise<Anggota[]> => {
    const result = await query<Anggota[]>("SELECT * FROM anggota");
    return result;
};

export interface NamaAnggota {
    id: number;
    name: string;
}

export const getAllNamaAnggota = async (): Promise<NamaAnggota[]> => {
    const result = await query<NamaAnggota[]>("SELECT id, name FROM anggota WHERE status = 'active';");
    return result;
};

export const getAnggotaByID = async (id: number): Promise<Anggota[]> => {
    const result = await query<Anggota[]>("SELECT * FROM anggota WHERE id = ?;", [id]);
    return result;
};

export const getKetua = async (): Promise<Anggota[]> => {
    const result = await query<Anggota[]>("SELECT * FROM anggota WHERE jabatan = 'Ketua';");
    return result;
};

export const getWakilKetua = async (): Promise<Anggota[]> => {
    const result = await query<Anggota[]>("SELECT * FROM anggota WHERE jabatan = 'Wakil Ketua';");
    return result;
};

export const getSekretaris = async (): Promise<Anggota[]> => {
    const result = await query<Anggota[]>("SELECT * FROM anggota WHERE jabatan LIKE 'Sekretaris%';");
    return result;
};

export const getBendahara = async (): Promise<Anggota[]> => {
    const result = await query<Anggota[]>("SELECT * FROM anggota WHERE jabatan LIKE 'Bendahara%';");
    return result;
};
