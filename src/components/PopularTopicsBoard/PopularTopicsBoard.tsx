'use client';
import styles from './popularTopicsBoard.module.scss';
import TopicFrame from "@/components/TopicFrame/TopicFrame";
import {useRouter} from "next/navigation";
import {TopicResponseBody} from "@/api/Topics";

type Props = {
    topics: TopicResponseBody[]
};

export type TopicType = {
    id: string,
    name: string,
    created_at: string,
    imageUrl: string
}

export default function PopularTopicsBoard({ topics }: Props) {
    const router = useRouter();

    const onTopicRouteClickHandler = (topic: TopicResponseBody) => {
        router.push(`/topic/${topic.id}`);
    }

    return (
        <div className={styles['popular-topics-board']}>
            { topics.map((topic) =>
                        <TopicFrame
                            topic={topic}
                            key={topic.id}
                            onClick={onTopicRouteClickHandler}
                        />
            )}
        </div>
    );
};