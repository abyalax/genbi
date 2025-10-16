import bcrypt from "bcrypt"
import query from "@/database/db";

export interface Admin {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
}

export interface CredentialAdmin {
    email: string;
    password: string;
}

export async function signUp(admin: Admin, callback: Function) {

    const result = await query<Admin[]>("SELECT * FROM admin;");

    if (result.length <= 0) {
        callback(false);
    }
    else {
        admin.password = await bcrypt.hash(admin.password, 10)
        await query<Admin[]>("INSERT INTO admin (name, email, password) VALUES (?, ?, ?);", [admin.name, admin.email, admin.password]);
        callback(true);
    }
}

export async function signIn(email: string) {
    const admin = await query<Admin[]>("SELECT * FROM admin WHERE email = ?;", [email])
    return admin[0];
}