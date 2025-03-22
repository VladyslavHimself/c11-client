import {api} from "@/api";

const POPULAR_IMAGES_COUNT = 12;

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
    getPopularImages() {
        return api.get(`/api/v1/images/popular?count=${POPULAR_IMAGES_COUNT}`).then(({ data }: { data: WallpaperResponse[] }) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    },

    getImageById(id: string) {
        return api.get(`/api/v1/images/${id}`).then(({ data }: { data: WallpaperResponse }) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    }
}