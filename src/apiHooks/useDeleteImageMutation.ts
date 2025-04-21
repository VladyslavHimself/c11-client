import axios from "axios";
import React from "react";
import {revalidateAllPathes} from "@/actions/pathesRevalidators";

const PROXY_ENDPOINT = '/api/delete-image'

export function useDeleteImageMutation() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const deleteImage = React.useCallback(async (imageId: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.delete(PROXY_ENDPOINT, { imageId });
            setData(response.data);

        } catch (err) {
            setError(err?.response?.data?.error || "Something went wrong");
        } finally {
            revalidateAllPathes();
            setLoading(false);
        }
    }, []);

    return { deleteImage, data, loading, error };
}