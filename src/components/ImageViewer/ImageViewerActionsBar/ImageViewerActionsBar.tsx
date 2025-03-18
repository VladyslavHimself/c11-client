import styles from './ImageViewerActionsBar.module.scss';
import {Button} from "@/components/ui/button";
import LikeIcon from "../../../../public/LikeIcon";
import StarIcon from "../../../../public/StarIcon";
import MoreVertIcon from "../../../../public/MoreVertIcon";

export default function ImageViewerActionsBar() {
    return (
        <div className={styles['wallpaper-viewer-menu-actions-bar']}>
            <Button className="bg-[#101010] py-6 px-5"><LikeIcon/> 2.4k</Button>
            <Button className="bg-[#101010] py-6"><StarIcon /></Button>
            <Button className="bg-[#101010] py-6"><MoreVertIcon /></Button>
        </div>
    );
};