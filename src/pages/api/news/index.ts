import query from '@/database/db';
import { News } from '@/services/news';
import { responseAPI, responseData, responseMethodNotAllowed } from '@/utils/response';
import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
    api: {
        bodyParser: true,
    },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const news: News = req.body;
            const { title, description, slug, content, image, created_at, updated_at, date, author, meta_title, meta_description, meta_keywords, meta_author, meta_image, meta_url, video, category } = news;

            if (image !== null && meta_image !== null) {
                if (!image || typeof image !== 'string' || !image.startsWith('http')) {
                    return responseAPI(res, false, 400, 'Invalid image URL');
                }
                if (!meta_image || typeof meta_image !== 'string' || !meta_image.startsWith('http')) {
                    return responseAPI(res, false, 400, 'Invalid meta_image URL');
                }
            }

            const data = await query(
                `INSERT INTO news 
                (title, description, slug, content, image, created_at, updated_at, date, author, meta_title, meta_description, meta_keywords, meta_author, meta_image, meta_url, video, category) 
                VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
                [title, description, slug, content, image, created_at, updated_at, date, author, meta_title, meta_description, meta_keywords, meta_author, meta_image, meta_url, video, category]
            );
            console.log("Success Upload Data", data);
            return responseAPI(res, true, 200, 'News entry created successfully');
        } catch (error) {
            console.error('Database Error:', error);
            return responseAPI(res, false, 500, 'Failed to create news entry');
        }
    }
    else if (req.method === 'PUT') {
        try {
            const news: Partial<News> = req.body;
            const { id, image, meta_image } = news;

            if (image !== null && meta_image !== null) {
                if (!image || typeof image !== 'string' || !image.startsWith('http')) {
                    return responseAPI(res, false, 400, 'Invalid image URL');
                }
                if (!meta_image || typeof meta_image !== 'string' || !meta_image.startsWith('http')) {
                    return responseAPI(res, false, 400, 'Invalid meta_image URL');
                }
            }

            const allowedFields = ["title", "description", "slug", "content", "image", "created_at", "updated_at", "date", "author", "meta_title", "meta_description", "meta_keywords", "meta_author", "meta_image", "meta_url", "video", "category", "id"]
            const fieldsToUpdate = []
            const values = []

            for (const [key, value] of Object.entries(news)) {
                if (allowedFields.includes(key) && value !== undefined && value !== null) {
                    fieldsToUpdate.push(`${key} = ?`);
                    values.push(value);
                }
            }
            if (fieldsToUpdate.length === 0) return responseAPI(res, false, 400, 'No valid fields to update');
            values.push(id);
            const result = await query<{ affectedRows: number }>(`
                UPDATE news SET ${fieldsToUpdate.join(', ')} WHERE id = ?`, values
            );
            console.log("Success Upload Data", result);
            return responseAPI(res, true, 200, 'Succes Update news ');

        } catch (error) {
            console.error('Database Error:', error);
            return responseAPI(res, false, 500, 'Failed to update news');
        }
    } else {
        return responseMethodNotAllowed(res);
    }
}


