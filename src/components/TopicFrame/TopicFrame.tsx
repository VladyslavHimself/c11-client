import styles from "./topicFrame.module.scss";
import Image from "next/image";
import {TopicType} from "@/components/PopularTopicsBoard/PopularTopicsBoard";
import React from "react";

type Props = {
    topic: TopicType
};

export default function TopicFrame({ topic, children }: React.PropsWithChildren<Props>) {
    const { name, imageUrl } = topic;
    return (
        <div className={'topic-frame'}>
            { children && (
                <div className={styles['topic-frame-children-container-wrapper']}>
                    { children }
                </div>
            )}
            <div className={styles['topic-frame-title']}>{name}</div>
            <Image src={imageUrl} alt={name} fill objectFit="cover" />
        </div>
    );
};