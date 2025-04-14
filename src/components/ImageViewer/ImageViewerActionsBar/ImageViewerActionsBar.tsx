'use client';

import styles from './ImageViewerActionsBar.module.scss';
import {Button} from "@/components/ui/button";
import LikeIcon from "../../../../public/LikeIcon";
import StarIcon from "../../../../public/StarIcon";
import MoreVertIcon from "../../../../public/MoreVertIcon";
import {WallpaperResponse} from "@/api/Images";
import {useUserImageReactionMutation} from "@/apiHooks/useUserImageReactionMutation";


type Props = {
    wallpaperMetadata: WallpaperResponse;
}

export default function ImageViewerActionsBar({ wallpaperMetadata }: Props) {
    const { setUserReactionToImage } = useUserImageReactionMutation();
    const { id, likes } = wallpaperMetadata;
    return (
        <div className={styles['wallpaper-viewer-menu-actions-bar']}>
            <Button
                onClick={() => setUserReactionToImage(id, 'LIKE')}
                className="bg-[#101010] py-6 px-5 w-24 flex justify-start">
                <LikeIcon/> {likes}
            </Button>
            <Button onClick={() => setUserReactionToImage(id, 'FAVORITE')} className="bg-[#101010] py-6"><StarIcon /></Button>
            <Button className="bg-[#101010] py-6"><MoreVertIcon /></Button>
        </div>
    );
};