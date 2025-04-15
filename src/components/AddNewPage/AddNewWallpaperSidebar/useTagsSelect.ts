import React from "react";
import {useSearchTagsMutation} from "@/apiHooks/useSearchTagsMutation";

export default function useTagsSelect(searchQuery: string) {
    const { searchTags, data, loading } = useSearchTagsMutation();

    React.useEffect(() => {
        searchTags(searchQuery);
    }, [searchQuery, searchTags]);

    return { data, loading };
};