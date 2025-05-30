import axios from "axios";
import React from "react";
import {revalidateAllPathes} from "@/actions/pathesRevalidators";
import {UserFollowReaction} from "@/api/Users";

export default function useUserFollowReactionMutation() {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    const setUserFollowReaction = React.useCallback(async (targetUserId: string, reaction: UserFollowReaction) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post("/api/set-user-reaction", {
                targetUserId,
                reaction,
            });
            setData(response.data);

        } catch (err) {
            console.error(err);
            setError("Something went wrong");
        } finally {
            revalidateAllPathes();
            setLoading(false);
        }
    }, []);

    return { setUserFollowReaction, data, loading, error };
}