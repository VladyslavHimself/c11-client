import styles from './popularTopicsBoard.module.scss';
import TopicFrame from "@/components/PopularTopicsBoard/TopicFrame/TopicFrame";

type Props = {
    topics: TopicType[]
};

export type TopicType = {
    id: string,
    name: string,
    created_at: string,
    imageUrl: string
}

export default function PopularTopicsBoard({ topics }: Props) {
    return (
        <div className={styles['popular-topics-board']}>
            { topics.map((topic) => <TopicFrame topic={topic} key={topic.id} />) }
        </div>
    );
};