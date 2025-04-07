import styles from "./topicFrame.module.scss";
import Image from "next/image";
import React from "react";
import {TopicResponseBody} from "@/api/Topics";
import {isFunction} from "lodash";

type Props = {
    topic: TopicResponseBody,
    onClick?: (topic: TopicResponseBody) => void,
};

export default function TopicFrame({ topic, children, onClick }: React.PropsWithChildren<Props>) {
    const { name } = topic;
    return (
        <div className={'topic-frame'} onClick={() => isFunction(onClick) && onClick(topic)}>
            { children && (
                <div className={styles['topic-frame-children-container-wrapper']}>
                    { children }
                </div>
            )}
            <div className={styles['topic-frame-title']}>{name}</div>
            <Image src={''} alt={name} fill objectFit="cover" />
        </div>
    );
};