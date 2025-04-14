// @flow
import * as React from 'react';
import StarIcon from "../../../public/StarIcon";
import {Button} from "@/components/ui/button";
import {WallpaperResponse} from "@/api/Images";
import {useUserImageReactionMutation} from "@/apiHooks/useUserImageReactionMutation";

type Props = {
    wallpaperMetadata: WallpaperResponse
};

export default function FavouritesButton({ wallpaperMetadata }: Props) {
    const { setUserReactionToImage } = useUserImageReactionMutation();
    const { id } = wallpaperMetadata;

    return (
        <Button onClick={e => {
            e.stopPropagation();
            setUserReactionToImage(id, 'UNFAVORITE');
        }}>
            <StarIcon />
        </Button>
    );
};