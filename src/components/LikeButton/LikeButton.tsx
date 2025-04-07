'use client';
import LikeIcon from "../../../public/LikeIcon";
import {Button} from "@/components/ui/button";
import {WallpaperResponse} from "@/api/Images";
import {useUserImageReactionMutation} from "@/hooks/useUserImageReactionMutation";

type Props = {
    wallpaperMetadata: WallpaperResponse
};

export default function LikeButton({ wallpaperMetadata }: Props) {
    const { setUserReactionToImage } = useUserImageReactionMutation()
    const { id, likes } = wallpaperMetadata;

    return (
        <Button onClick={e => {
            e.stopPropagation();
            setUserReactionToImage(id, 'DISLIKE');
        }}>
            <LikeIcon /> {likes}
        </Button>
    );
};