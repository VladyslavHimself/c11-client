import axios from "axios";
import React from "react";
import {revalidateAllPathes} from "@/actions/pathesRevalidators";
import {TopicResponseBody} from "@/api/Topics";

export default function useCreateNewTopicMutation(callback: () => void) {
    const [data, setData] = React.useState<TopicResponseBody>();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const createNewTopic = React.useCallback(async (image: File, topicNameInput: string) => {
        setLoading(true);
        setError(null);

        try {
            const formData = new FormData();
            formData.append("file", image);
            formData.append("name", topicNameInput);

            const response = await axios.post("/api/create-new-topic", formData);
            setData(response.data);
        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        } finally {
            revalidateAllPathes();
            setLoading(false);
            callback();
        }
    }, [callback]);

    return { createNewTopic, data, loading, error };
}