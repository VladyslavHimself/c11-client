'use client';

// TODO: Unify with "WallpaperCarousel.tsx" component after MVP

import styles from './topicsCarousel.module.scss';
import useDragControlCarousel from "@/components/TopicsCarousel/useAdaptiveCarousel/useDragControlCarousel";
import React from "react";
import { motion } from "framer-motion";
import MinimizedTopicFrame from "@/components/TopicsCarousel/MinimizedTopicFrame/MinimizedTopicFrame";
import {TopicResponseBody} from "@/api/Topics";
import {useRouter} from "next/navigation";

type Props = {
    topics: TopicResponseBody[];
    selectedTopics?: TopicResponseBody[];
}

export default function TopicsCarousel({ topics }: Props) {
    const router = useRouter();
    const { carouselOuterRef, carouselInnerRef, dragConstraints } = useDragControlCarousel();

    let isCarouselDragging = false;


    const onClickHandler = (topic: TopicResponseBody) => {
        if (isCarouselDragging) return;
        router.push(`/topic/${topic.id}`);
    }



    return (
        <div ref={carouselOuterRef} className={styles['topics-carousel']}>
            <div className={styles['topics-carousel-container']}>
                <motion.div
                    drag="x"
                    dragConstraints={dragConstraints}
                    ref={carouselInnerRef}

                    // @ts-expect-error while drag is not supported by the "motion.div" component.
                    whileDrag={() => { isCarouselDragging = true; }}
                    onDragEnd={() => { isCarouselDragging = false; }}
                    style={{display: "flex", alignItems: "center"}}>

                    {
                        topics.map((topic) => (
                            <MinimizedTopicFrame key={topic.id} topic={topic} onClickHandler={onClickHandler} />
                        ))
                    }
                </motion.div>
            </div>
        </div>
    );
};