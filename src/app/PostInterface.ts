export interface Post {
    id?: number;
    title: string;
    author: string;
    category: string;
    description: string;
}

export interface Category {
    id?: number;
    name: string;
}