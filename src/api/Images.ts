import {api} from "@/api";

export const POPULAR_IMAGES_COUNT = 12;

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

export type FoundImagesResponse = {
    hits: WallpaperResponse[],
    "query": string,
    "processingTimeMs": number,
    "hitsPerPage": number,
    "page": number,
    "totalPages": number,
    "totalHits": number
}


export const ImagesAPI = {
    getPopularImages(count) {
        return api.get(`/api/v1/images/popular?count=${count}`).then(({ data }: { data: FoundImagesResponse[] }) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    },

    getImageById(id: string) {
        return api.get(`/api/v1/images/${id}`).then(({ data }: { data: WallpaperResponse }) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    },

    searchImages(count: number, input: number) {
        return api.get(`/api/v1/images/search?input=${input}`).then(({ data }: { data: WallpaperResponse[] }) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    },

    getFavouriteImages(): Promise<WallpaperResponse[]> {
        return api.get(`/api/v1/images/favourites`).then(({ data }: { data: WallpaperResponse[] }) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    }
}