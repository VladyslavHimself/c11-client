import axios from "axios";
import React from "react";
import {revalidateAllPathes} from "@/actions/pathesRevalidators";
import {WallpaperResponse} from "@/api/Images";

export default function useAddNewWallpaperMutation(callback: () => void) {
    const [data, setData] = React.useState<null|WallpaperResponse>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const addNewWallpaper = React.useCallback(async (image: File, topicId: string, tags: string) => {
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("topicId", topicId);
            formData.append("tagIds", tags);

            const response = await axios.post("/api/add-new-wallpaper", formData);
            setData(response.data);
        } catch(e) {
            console.error(e);
            setError("Something went wrong");
        } finally {
            revalidateAllPathes();
            setLoading(false);
            callback();
        }
    }, [callback]);

    return { addNewWallpaper, data, loading, error };
}