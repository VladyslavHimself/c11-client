import styles from './topicFrameOwnerMenu.module.scss';
import {TrashIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import UserIcon from "../../../../public/UserIcon";

export default function TopicFrameOwnerMenu() {
    return (
        <div className={styles['topic-frame-owner-menu']}>
            <Button onClick={e => {
                e.stopPropagation();
                console.log('deleted wallpaper')
            }}>
                <TrashIcon style={{ color: "red" }} />
            </Button>

            <Button>
                <UserIcon />
                25.2k
            </Button>
        </div>
    );
};

// TODO: Change user topic interactions from button to familiar element from wallpaper frames.