import styles from "./topicFrame.module.scss";
import Image from "next/image";
import {TopicType} from "@/components/PopularTopicsBoard/PopularTopicsBoard";

type Props = {
    topic: TopicType
};

export default function TopicFrame({ topic }: Props) {
    const { name, imageUrl } = topic;
    return (
        <div className={'topic-frame'}>
            <div className={styles['topic-frame-title']}>{name}</div>
            <Image src={imageUrl} alt={name} fill objectFit="cover" />
        </div>
    );
};