import query from "@/database/db";
import { responseAPI, responseMethodNotAllowed, responseSuccess } from "@/utils/response";
import { ResultSetHeader } from "mysql2";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { title, description, content, start, end } = req.body;
            console.log({ title, description, content, start, end });

            const response: ResultSetHeader = await query(`
                INSERT INTO agenda 
                (title, description, content, start, end)
                VALUES (?, ?, ?, ?, ?)
                `,
                [title, description, content, start, end]
            )

            if (response.affectedRows > 0) {
                return responseSuccess(res)
            } else {
                return responseAPI(res, false, 500, 'Failed to create agenda');
            }

        } catch (error) {
            console.log({error});
            responseAPI(res, false, 500, 'Failed to create agenda');
        }
    } else {
        responseMethodNotAllowed(res)
    }
}