import query from "@/database/db";

export interface News {
    id: number;
    title: string;
    description: string;
    slug: string;
    content: string;
    category: string;
    image?: string;
    video?: string;
    author: number;
    date: string;
    created_at: string;
    updated_at: string;
    meta_title: string;
    meta_description: string;
    meta_author: string;
    meta_keywords: string;
    meta_image: string;
    meta_url: string
    author_name: string
}

export const getAllNews = async (): Promise<News[]> => {
    const result = await query<News[]>(`
        SELECT news.*, anggota.name AS author_name FROM news INNER JOIN anggota ON news.author = anggota.id`
    );
    return result.map((e) => ({
        ...e,
        date: new Date(e.date).toISOString(),
        created_at: new Date(e.created_at).toISOString(),
        updated_at: new Date(e.updated_at).toISOString(),
    }));
};

export const getHotNews = async (): Promise<News[]> => {
    const result = await query<News[]>(`
        SELECT news.*, anggota.name AS author_name FROM news INNER JOIN anggota ON news.author = anggota.id ORDER BY news.created_at DESC LIMIT 3`
    );
    return result.map((e) => ({
        ...e,
        date: new Date(e.date).toISOString(),
        created_at: new Date(e.created_at).toISOString(),
        updated_at: new Date(e.updated_at).toISOString(),
    }));
};

export interface Gallery {
    image: string
    title: string
    date: string
    slug: string
}

export const getAllGallery = async (): Promise<Gallery[]> => {
    const result = await query<Gallery[]>(`
        SELECT news.image, news.title, news.date, news.slug FROM news`
    );
    return result.map((e) => ({
        ...e,
        date: new Date(e.date).toISOString(),
    }));
};

export const getNewsByID = async (id: number): Promise<News[]> => {
    const result = await query<News[]>(
        `SELECT news.*, anggota.name AS author_name FROM news INNER JOIN anggota ON news.author = anggota.id WHERE news.id = ?;`,
        [id]
    );
    return result.map((e) => ({
        ...e,
        date: new Date(e.date).toISOString(),
        created_at: new Date(e.created_at).toISOString(),
        updated_at: new Date(e.updated_at).toISOString(),
    }));
};

export const getNewsBySlug = async (slug: string): Promise<News[]> => {
    const result = await query<News[]>(
        `SELECT 
            news.*, 
            anggota.name AS author_name 
        FROM 
            news 
        INNER JOIN 
            anggota 
        ON 
            news.author = anggota.id
        WHERE 
            news.slug = ?;`,
        [slug]
    );
    return result.map((e) => ({
        ...e,
        date: new Date(e.date).toISOString(),
        created_at: new Date(e.created_at).toISOString(),
        updated_at: new Date(e.updated_at).toISOString(),
    }));
};
