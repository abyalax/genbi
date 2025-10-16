import query from "@/database/db";
import { Anggota } from "@/services/anggota";
import { responseAPI, responseMethodNotAllowed } from "@/utils/response";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        try {
            const anggota: Partial<Anggota> = req.body;
            const { id, image } = anggota;
            if (!id || typeof id !== 'number') {
                return responseAPI(res, false, 400, 'Invalid or missing ID');
            }
            if (image && (typeof image !== 'string' || !image.startsWith('http'))) {
                return responseAPI(res, false, 400, 'Invalid image URL');
            }
            const allowedFields = ['name', 'email', 'phone', 'fakultas', 'prodi', 'image', 'semester', 'jabatan', 'divisi_id'];
            const fieldsToUpdate = [];
            const values = [];
            for (const [key, value] of Object.entries(anggota)) {
                if (allowedFields.includes(key) && value !== undefined && value !== null) {
                    fieldsToUpdate.push(`${key} = ?`);
                    values.push(value);
                }
            }
            if (fieldsToUpdate.length === 0) return responseAPI(res, false, 400, 'No valid fields to update');
            values.push(id);
            const result = await query<{ affectedRows: number }>(`
                UPDATE anggota SET ${fieldsToUpdate.join(', ')} WHERE id = ?`, values
            );
            if (result.affectedRows > 0) {
                return responseAPI(res, true, 200, 'Data updated successfully', {
                    affectedRows: result.affectedRows,
                });
            } else {
                return responseAPI(res, false, 404, 'Data not found');
            }
        } catch (error) {
            console.error('Database Error:', error);
            return responseAPI(res, false, 500, 'Internal Server Error');
        }
    } else {
        return responseMethodNotAllowed(res);
    }
}