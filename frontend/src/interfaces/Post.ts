// Postの型定義
export interface Post {
    id:number;
    title:string;
    content:string;
    completed:boolean;
    created_at?:string;
    updated_at?:string;
}