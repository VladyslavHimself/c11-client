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

export type UserReactionToImage = 'LIKE' | 'DISLIKE' | 'FAVORITE' | 'UNFAVORITE'


export const ImagesAPI = {
    getPopularImages(count?: number) {
        return api.get(`/api/v1/images/popular`, { params: count ? { count } : undefined }).then(({ data }: { data: FoundImagesResponse[] }) => data).catch(err => {
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

    searchImages(count: number, input: number): Promise<FoundImagesResponse> {
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
    },

    getUserUploadedImages(): Promise<WallpaperResponse[]> {
        return api.get(`/api/v1/images/uploads`).then(({ data }: { data: WallpaperResponse[] }) => data).catch(err => {
            if (err.status === 401) return null;
            return err;
        });
    },

    setUserReactionToImage(imageId: string, reaction: UserReactionToImage) {
        return api.post(`/api/v1/images/${imageId}/reaction`, {
            "reaction": reaction
        });
    },

    deleteImage(imageId: string): Promise<void> {
        return api.delete(`/api/v1/images/${imageId}`);
    }
}