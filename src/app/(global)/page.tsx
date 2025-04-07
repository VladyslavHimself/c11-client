import HeaderSearchbar from "@/components/HeaderSearchbar/HeaderSearchbar";
import WallpaperCarousel from "@/components/WallpaperCarousel/WallpaperCarousel";
import {Heading} from "@/components/ui/Heading/Heading";

import styles from '@/styles/home-page.module.scss';
import {ImagesAPI, POPULAR_IMAGES_COUNT} from "@/api/Images";
import PopularTopicsBoard from "@/components/PopularTopicsBoard/PopularTopicsBoard";
import {TopicsAPI} from "@/api/Topics";
import ExploreMoreButton from "@/components/ExploreMoreButton/ExploreMoreButton";

export default async function HomePage() {
    const popularWallpapers = await ImagesAPI.getPopularImages(POPULAR_IMAGES_COUNT);
    const popularTopics = await TopicsAPI.getPopularTopics(4);

    return (
      <div className={styles['home-page']}>
          <HeaderSearchbar routePath={'/explore'} />
          <div className={styles['home-page-content-wrapper']}>
              <div className={styles['popular-wallpapers-section']}>
                  <Heading title="Popular" />
                  <div className="popular-wallpapers">
                      <WallpaperCarousel wallpapers={popularWallpapers} />
                  </div>
              </div>

              <div className={styles['popular-topics-section']}>
                  <Heading title="Explore popular topics" />
                  <div className={styles['popular-topics']}>
                      <PopularTopicsBoard topics={popularTopics} />
                      <ExploreMoreButton />
                  </div>
              </div>
          </div>
      </div>
  );
}

