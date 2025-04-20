'use client';

import styles from './ImageViewerActionsBar.module.scss';
import {Button} from "@/components/ui/button";
import LikeIcon from "../../../../public/LikeIcon";
import StarIcon from "../../../../public/StarIcon";
import MoreVertIcon from "../../../../public/MoreVertIcon";
import {WallpaperResponse} from "@/api/Images";
import {useUserImageReactionMutation} from "@/apiHooks/useUserImageReactionMutation";
import withAuthenticatedProtection from "@/components/withAuthenticatedProtection/withAuthenticatedProtection";
import {DISLIKE, FAVORITE, LIKE, UNFAVORITE} from "@/constants/userReactions.constants";


type Props = {
    wallpaperMetadata: WallpaperResponse;
}

// TODO: Unify with Like button by adding as extended variant. (Do also with Favourites button)
const ProtectedLikeButton = withAuthenticatedProtection((props: { action: () => void, likes: number, isAuthenticatedAction: boolean}) => (
    <Button
        onClick={() => props.isAuthenticatedAction && props.action()}
        className="flex items-center justify-center box-border px-2 py-6 max-w-[80px] w-[80px]">
        <LikeIcon/> {props.likes}
    </Button>
));


const ProtectedFavouritesButton = withAuthenticatedProtection((props: { action: () => void, isAuthenticatedAction: boolean }) => (
    <Button
        onClick={() => props.isAuthenticatedAction && props.action()}
        className="flex items-center justify-center box-border px-4 py-6 w-[50px]">
        <StarIcon />
    </Button>
))


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
            <ProtectedLikeButton
                likes={likes}
                action={onLikeButtonClickHandler}
            />

            <ProtectedFavouritesButton
                action={onFavouritesButtonClickHandler}
            />

            <Button className="bg-[#101010] py-6"><MoreVertIcon /></Button>
        </div>
    );
};