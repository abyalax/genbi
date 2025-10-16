import { Anggota } from '../anggota/type';

export interface Kepengurusan {
  ketua: Anggota[];
  wakilKetua: Anggota[];
  sekretaris: Anggota[];
  bendahara: Anggota[];
}

export interface BPH {
  kominfo: {
    ketua: Anggota;
    anggota: Anggota[];
  };
  internasionalisasi: {
    ketua: Anggota;
    anggota: Anggota[];
  };
  pendidikan: {
    ketua: Anggota;
    anggota: Anggota[];
  };
  lingkungan: {
    ketua: Anggota;
    anggota: Anggota[];
  };
  pengabdian: {
    ketua: Anggota;
    anggota: Anggota[];
  };
  kewirausahaan: {
    ketua: Anggota;
    anggota: Anggota[];
  };
}
