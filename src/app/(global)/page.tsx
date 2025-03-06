import HeaderSearchbar from "@/components/HeaderSearchbar/HeaderSearchbar";
import WallpaperCarousel from "@/components/WallpaperCarousel/WallpaperCarousel";
import {Heading} from "@/components/ui/Heading/Heading";

import styles from '@/styles/dashboard.module.scss';
import {ImagesAPI} from "@/api/Images";

export default async function Home() {
    const wallpapers = await ImagesAPI.getAllWallpapers();
    console.log(wallpapers);

    return (
      <div style={{height:'100%', flex: '1 1 100%'}}>
          <HeaderSearchbar />
          <div className={styles['dashboard']}>
              <div className={styles['dashboard-section']}>
                  <Heading title="Popular" />
                  <div className="popular-wallpapers">
                      <WallpaperCarousel wallpapers={wallpapers} />
                  </div>
              </div>

              {/*<div className={styles['dashboard-section']}>*/}
              {/*    <Heading title="Explore popular topics" />*/}
              {/*</div>*/}
          </div>
      </div>
  );
}

