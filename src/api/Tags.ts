import {api} from "@/api";
import {AxiosError} from "axios";

export type SearchTagsResponse = {
    hits: Tag[]
    query: string
    processingTimeMs: number
    hitsPerPage: number
    page: number
    totalPages: number
    totalHits: number
}

export type Tag = {
    id: string
    name: string
    createdAt: string
    updatedAt: string
    authorId: string
}

export const TagsApi = {
    async searchTags(prompt?: string, count?: number): Promise<SearchTagsResponse | null> {
        try {
            const params: Record<string, string|number> = {};
            if (prompt) params.input = prompt;
            if (count) params.count = count;

            const { data } = await api.get<SearchTagsResponse>(`/api/v1/tags/search`, { params });
            return data;
        } catch (err) {
            const error = err as AxiosError;
            if (error?.response?.status === 401) return null;
            throw err; // або: return { error: true, message: err.message };
        }
    }
}