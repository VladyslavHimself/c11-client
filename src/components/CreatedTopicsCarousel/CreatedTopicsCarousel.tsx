'use client';

import styles from './createdTopicsCarousel.module.scss';
import {TopicResponseBody} from "@/api/Topics";
import TopicFrame from "@/components/TopicFrame/TopicFrame";
import useDragControlCarousel from "@/components/TopicsCarousel/useAdaptiveCarousel/useDragControlCarousel";
import { motion } from "framer-motion";
import TopicFrameOwnerMenu from "@/components/TopicFrame/TopicFrameOwnerMenu/TopicFrameOwnerMenu";

type Props = {
    topics: TopicResponseBody[]
}

export default function CreatedTopicsCarousel({ topics }: Props) {
    const { carouselOuterRef, carouselInnerRef, dragConstraints } = useDragControlCarousel();


    return (
        <div ref={carouselOuterRef} className={styles['created-topics-carousel']}>
            <div className={styles['created-topics-carousel-container']}>
                <motion.div
                    drag="x"
                    dragConstraints={dragConstraints}
                    ref={carouselInnerRef}
                    style={{display: "flex", alignItems: "center"}}
                >
                    {topics?.map((topic) => (
                        <div key={topic.id} className={styles['topic-item-container']}>
                            <TopicFrame topic={topic}>
                                <TopicFrameOwnerMenu />
                            </TopicFrame>
                        </div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};