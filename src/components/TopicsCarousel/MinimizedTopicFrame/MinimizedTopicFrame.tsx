import styles from './minimizedTopicFrame.module.scss';
import Image from "next/image";
import {TopicResponseBody} from "@/api/Topics";
import React from "react";

type Props = {
    topic: TopicResponseBody,
    onClickHandler: (topic: TopicResponseBody) => void
};

export default function MinimizedTopicFrame({ topic, onClickHandler }: Props) {

    return (
        <div className={styles['minimized-topic-frame']} onClick={() => onClickHandler(topic)}>
            <div className={styles['minimized-topic-frame-overlay']}>
               <div className={styles['minimized-topic-frame-title']}>{ topic.name }</div>
            </div>
            <Image src="https://picsum.photos/200/300" alt={"alt"} fill />
        </div>
    );
};