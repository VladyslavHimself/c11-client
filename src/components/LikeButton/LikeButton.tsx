'use client';
import LikeIcon from "../../../public/LikeIcon";
import {Button} from "@/components/ui/button";
import {WallpaperResponse} from "@/api/Images";
import {useUserImageReactionMutation} from "@/apiHooks/useUserImageReactionMutation";
import withAuthenticatedProtection from "@/components/withAuthenticatedProtection/withAuthenticatedProtection";
import {isBoolean} from "lodash";
import {DISLIKE, LIKE} from "@/constants/userReactions.constants";

type Props = {
    wallpaperMetadata?: WallpaperResponse,
    isAuthenticatedAction?: boolean
};

function LikeButton({wallpaperMetadata, isAuthenticatedAction}: Props) {
    const {setUserReactionToImage} = useUserImageReactionMutation()
    const {id, likes, isLiked} = wallpaperMetadata!;

    const onSetReactionToImageHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (!isBoolean(isLiked)) return;
        setUserReactionToImage(id, isLiked ? DISLIKE : LIKE);
    }

    return (
        <Button onClick={e => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isAuthenticatedAction && onSetReactionToImageHandler(e);
        }}>
            <LikeIcon /> {likes}
        </Button>
    );
}

export default withAuthenticatedProtection<Props>(LikeButton);