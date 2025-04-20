// @flow
import * as React from 'react';
import StarIcon from "../../../public/StarIcon";
import {Button} from "@/components/ui/button";
import {WallpaperResponse} from "@/api/Images";
import {useUserImageReactionMutation} from "@/apiHooks/useUserImageReactionMutation";
import withAuthenticatedProtection from "@/components/withAuthenticatedProtection/withAuthenticatedProtection";
import {isBoolean} from "lodash";
import {FAVORITE, UNFAVORITE} from "@/constants/userReactions.constants";

type Props = {
    wallpaperMetadata: WallpaperResponse
    isAuthenticatedAction: boolean;
};

function FavouritesButton({ wallpaperMetadata, isAuthenticatedAction }: Props) {
    const { setUserReactionToImage } = useUserImageReactionMutation();
    const { id, isFavorite } = wallpaperMetadata;


    const onSetReactionToImageHandler = (e) => {
        e.stopPropagation();
        if (!isBoolean(isFavorite)) return;
        setUserReactionToImage(id, isFavorite ? UNFAVORITE : FAVORITE);
    }

    return (
        <Button onClick={e => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            isAuthenticatedAction && onSetReactionToImageHandler(e);
        }}>
            <StarIcon />
        </Button>
    );
}

export default withAuthenticatedProtection(FavouritesButton);