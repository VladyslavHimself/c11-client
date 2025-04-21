'use client';

import styles from './ImageViewerActionsBar.module.scss';
import {Button} from "@/components/ui/button";
import LikeIcon from "../../../../public/LikeIcon";
import StarIcon from "../../../../public/StarIcon";
import MoreVertIcon from "../../../../public/MoreVertIcon";
import {WallpaperResponse} from "@/api/Images";
import {useUserImageReactionMutation} from "@/apiHooks/useUserImageReactionMutation";
import {DISLIKE, FAVORITE, LIKE, UNFAVORITE} from "@/constants/userReactions.constants";
import ProtectedButton from "@/components/ImageViewer/ImageViewerActionsBar/ProtectedButton";

type Props = {
    wallpaperMetadata: WallpaperResponse;
}

export default function ImageViewerActionsBar({ wallpaperMetadata }: Props) {
    const { setUserReactionToImage } = useUserImageReactionMutation();
    const { id, likes, isLiked, isFavorite } = wallpaperMetadata;

   const onLikeButtonClickHandler = () => {
       setUserReactionToImage(id, isLiked ? DISLIKE : LIKE);
   }

   const onFavouritesButtonClickHandler = () => {
       setUserReactionToImage(id, isFavorite ? UNFAVORITE : FAVORITE);
   }


    return (
        <div className={styles['wallpaper-viewer-menu-actions-bar']}>
            <ProtectedButton action={onLikeButtonClickHandler}>
              <><LikeIcon/> {likes}</>
            </ProtectedButton>

            <ProtectedButton action={onFavouritesButtonClickHandler}>
                <StarIcon />
            </ProtectedButton>

            <Button className="bg-[#101010] py-6"><MoreVertIcon /></Button>
        </div>
    );
};