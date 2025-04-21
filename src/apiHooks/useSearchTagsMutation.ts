import axios from "axios";
import React from "react";
import { revalidateAllPathes } from "@/actions/pathesRevalidators";

const getProxyEndpoint = (tag: string) => `/api/search-tags?tag=${tag}`;

export function useSearchTagsMutation() {
    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const searchTags = React.useCallback(async (tag: string) => {
        if (!tag.trim()) return;
        setLoading(true);
        setError(null);

        try {
            const { data } = await axios.get(getProxyEndpoint(tag));
            setData(data.hits);
        } catch (err) {
            setError(err?.response?.data?.error || "Something went wrong");
        } finally {
            revalidateAllPathes();
            setLoading(false);
        }
    }, []);

    return { searchTags, data, loading, error };
}
