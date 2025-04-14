import {useSearchTopicMutation} from "@/apiHooks/useSearchTopicMutation";
import React from "react";

export default function useTopicsSelect(searchQuery: string) {
    const { searchTopic, data, loading } = useSearchTopicMutation();

    React.useEffect(() => {
        searchTopic(searchQuery);
    }, [searchQuery, searchTopic]);

    return { data, loading };
};