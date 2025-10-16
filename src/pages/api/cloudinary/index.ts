import query from '@/database/db';
import { responseAPI, responseMethodNotAllowed } from '@/utils/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { image, id } = req.body;

        if (!image || typeof image !== 'string' || !image.startsWith('http')) {
            return responseAPI(res, false, 400, 'Invalid image URL');
        }

        try {

            await query(`UPDATE anggota SET image = ? WHERE id = ?`, [image, id]);
            console.log(res);
            
            return responseAPI(res, true, 200, 'Image uploaded successfully');

        } catch (error) {

            console.error('Database Error:', error);
            return responseAPI(res, false, 500, 'Failed to upload image');
        }
    } else {
        return responseMethodNotAllowed(res);
    }
}
