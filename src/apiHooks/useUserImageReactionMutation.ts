import axios from "axios";
import React from "react";
import {UserReactionToImage} from "@/api/Images";
import {revalidateAllPathes} from "@/actions/pathesRevalidators";

export function useUserImageReactionMutation() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const setUserReactionToImage = React.useCallback(async (imageId: string, reaction: UserReactionToImage) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post("/api/setImageReaction", {
                imageId,
                reaction,
            });
            setData(response.data);

        } catch (err) {
            setError(err?.response?.data?.error || "Something went wrong");
        } finally {
            revalidateAllPathes();
            setLoading(false);
        }
    }, []);

    return { setUserReactionToImage, data, loading, error };
}