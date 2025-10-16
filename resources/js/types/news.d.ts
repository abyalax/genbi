export interface News {
    id?: number;
    title: string;
    description: string;
    slug: string;
    content: string;
    category: string;
    image?: string;
    video?: string;
    author: number;
    date: string;
    meta_title: string;
    meta_description: string;
    meta_author?: string;
    meta_keywords: string;
    meta_image?: string;
    meta_url?: string
    author_name?: string
    created_at?: string;
    updated_at?: string;
}

export interface Gallery {
    image: string
    title: string
    created_at: string
    slug: string
}

export interface Agenda {
    title: string
    description: string
    content: string
    start: string
    end: string
}

