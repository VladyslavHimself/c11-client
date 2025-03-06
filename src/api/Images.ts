import {api} from "@/api";

export type WallpaperResponse = {
    id: string
    name: string
    downloads: number
    likes: number
    width: number
    height: number
    size: number
    heights: number[]
    format: string
    filename: string
    authorId: string
    placeholder: string
    url: string
    mimetype: string
    isPublished: boolean
    topicId: string
    createdAt: string
    updatedAt: string
    tags: string[]
}


export const ImagesAPI = {
    getAllWallpapers(): Promise<WallpaperResponse[]> {
        return api.get("/api/images").then(({ data }: { data: WallpaperResponse[]}) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    }
}