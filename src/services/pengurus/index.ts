import { Anggota, getBendahara, getKetua, getSekretaris, getWakilKetua } from "../anggota";
import { getAnggotaDivisiByID } from "../divisi";

export interface Kepengurusan {
    ketua: Anggota[];
    wakilKetua: Anggota[];
    sekretaris: Anggota[];
    bendahara: Anggota[];
}

export interface BPH {
    kominfo: {
        ketua: Anggota,
        anggota: Anggota[]
    }
    internasionalisasi: {
        ketua: Anggota,
        anggota: Anggota[]
    }
    pendidikan: {
        ketua: Anggota,
        anggota: Anggota[]
    }
    lingkungan: {
        ketua: Anggota,
        anggota: Anggota[]
    }
    pengabdian: {
        ketua: Anggota,
        anggota: Anggota[]
    }
    kewirausahaan: {
        ketua: Anggota,
        anggota: Anggota[]
    }
}

export const getKepengurusan: () => Promise<Kepengurusan> = async () => {
    const ketua = await getKetua();
    const wakilKetua = await getWakilKetua();
    const sekretaris = await getSekretaris();
    const bendahara = await getBendahara();
    const data = {
        ketua,
        wakilKetua,
        sekretaris,
        bendahara,
    }
    return data
}

export const getBPH: () => Promise<BPH> = async () => {
    const kominfo = await getAnggotaDivisiByID(1)
    const internasionalisasi = await getAnggotaDivisiByID(2)
    const pendidikan = await getAnggotaDivisiByID(3)
    const lingkungan = await getAnggotaDivisiByID(4)
    const pengabdian = await getAnggotaDivisiByID(5)
    const kewirausahaan = await getAnggotaDivisiByID(6)

    const data = { kominfo, internasionalisasi, pendidikan, lingkungan, pengabdian, kewirausahaan }
    return data
}