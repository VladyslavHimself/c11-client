import styles from './topicFrameOwnerMenu.module.scss';
import {TrashIcon} from "lucide-react";
import {Button} from "@/components/ui/button";
import {TopicResponseBody} from "@/api/Topics";
import PhotoIcon from "../../../../public/PhotoIcon";
import DeleteTopicButton from "@/components/DeleteTopicButton/DeleteTopicButton";

type Props = {
    topic: TopicResponseBody
}

export default function TopicFrameOwnerMenu({ topic }: Props) {
    return (
        <div className={styles['topic-frame-owner-menu']}>
            <DeleteTopicButton topic={topic} />
            <Button>
                <PhotoIcon />
                { topic?.images || '0' }
            </Button>
        </div>
    );
};

// TODO: Change user topic interactions from button to familiar element from wallpaper frames.