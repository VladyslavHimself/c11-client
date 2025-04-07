import React from "react";
import styles from '@/styles/explore-page.module.scss';
import HeaderSearchbar from "@/components/HeaderSearchbar/HeaderSearchbar";
import {Heading} from "@/components/ui/Heading/Heading";
import TopicsCarousel from "@/components/TopicsCarousel/TopicsCarousel";
import {ImagesAPI } from "@/api/Images";
import {POPULAR_TOPICS_COUNT, TopicsAPI} from "@/api/Topics";
import WallpapersGallery from "@/components/WallpapersGallery/WallpapersGallery";

export default async function ExplorePage() {
    const wallpapers = await ImagesAPI.getPopularImages();
    const topics = await TopicsAPI.getPopularTopics(POPULAR_TOPICS_COUNT);

    return (
        <div className={styles['explore-page']}>
            <HeaderSearchbar />
            <div className={styles['explore-page-content-wrapper']}>
                <Heading title="Topics" subtitle="Explore trending topics" />
                <TopicsCarousel topics={topics} selectedTopics={[]} />
                <hr style={{ borderColor: '#202020', margin: "15px 0"}} />

                <WallpapersGallery wallpapers={wallpapers} />
            </div>
        </div>
    );
};