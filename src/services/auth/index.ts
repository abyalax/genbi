import Instance from "@/lib/axios";
import { Anggota } from "../anggota";

const authServices = {
    registerAccount : (data: Anggota) => Instance.post('/api/user/register', data)
}

export default authServices
