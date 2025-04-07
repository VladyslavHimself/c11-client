import axios from "axios";
import React from "react";
import {revalidateAllPathes} from "@/actions/pathesRevalidators";

const getProxyEndpoint = (topicId: string) => `/api/delete-topic/${topicId}`

export function useDeleteTopicMutation() {
    const [data, setData] = React.useState<any>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const deleteTopic = React.useCallback(async (topicId: string) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.delete(getProxyEndpoint(topicId));
            setData(response.data);

        } catch (err) {
            setError(err?.response?.data?.error || "Something went wrong");
        } finally {
            revalidateAllPathes();
            setLoading(false);
        }
    }, []);

    return { deleteTopic, data, loading, error };
}