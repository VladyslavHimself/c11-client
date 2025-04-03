import styles from '@/styles/topic-page.module.scss'
import {ImagesAPI} from "@/api/Images";
import {Heading} from "@/components/ui/Heading/Heading";
import WallpapersGallery from "@/components/WallpapersGallery/WallpapersGallery";
import React from "react";
import HeaderSearchbar from "@/components/HeaderSearchbar/HeaderSearchbar";
import {TopicsAPI} from "@/api/Topics";
import ExploreButton from "@/components/ExploreButton/ExploreButton";

type Params = { topicId: string; }

type Props = {
    params: Params;
}

export default async function TopicPage({ params }: Props) {
    const { topicId } = params;

    const foundWallpapers = await ImagesAPI.searchImages(50, topicId);
    const topicDetails = await TopicsAPI.getTopicById(topicId);

    return (
        <div className={styles['topic-page']}>
            <HeaderSearchbar />
            <div className={styles['topic-page-wrapper']}>
                <div className={styles['topic-page-heading']}>
                    <Heading title={topicDetails.name} />
                    <ExploreButton />
                </div>

                <hr style={{ borderColor: '#202020', margin: "15px 0"}}/>
                <WallpapersGallery wallpapers={foundWallpapers.hits} />
            </div>
        </div>
    );
};