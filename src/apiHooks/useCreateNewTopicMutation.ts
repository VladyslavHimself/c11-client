import axios from "axios";
import React from "react";
import {revalidateAllPathes} from "@/actions/pathesRevalidators";
import {CreateTopicBody, TopicResponseBody} from "@/api/Topics";

export default function useCreateNewTopicMutation(callback: () => void) {
    const [data, setData] = React.useState<TopicResponseBody>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const createNewTopic = React.useCallback(async (topicBody: CreateTopicBody) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post("/api/create-new-topic", { topicBody });
            console.log(response.data);
            setData(response.data);
        } catch (err) {
            setError(err?.response?.data?.error || "Something went wrong");
        } finally {
            revalidateAllPathes();
            setLoading(false);
            callback();
        }
    }, [callback]);

    return { createNewTopic, data, loading, error };
}