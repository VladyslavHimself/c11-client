import axios from "axios";
import React from "react";
import { revalidateAllPathes } from "@/actions/pathesRevalidators";

const getProxyEndpoint = (topic: string) => `/api/search-topic?topic=${topic}`;

export function useSearchTopicMutation() {
    const [data, setData] = React.useState<any>([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const searchTopic = React.useCallback(async (topic: string) => {
        if (!topic.trim()) return;
        setLoading(true);
        setError(null);

        try {
            const { data } = await axios.get(getProxyEndpoint(topic));
            setData(data.hits);
        } catch (err) {
            setError(err?.response?.data?.error || "Something went wrong");
        } finally {
            revalidateAllPathes();
            setLoading(false);
        }
    }, []);

    return { searchTopic, data, loading, error };
}
