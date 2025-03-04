import HeaderSearchbar from "@/components/HeaderSearchbar/HeaderSearchbar";
import WallpaperCarousel from "@/components/WallpaperCarousel/WallpaperCarousel";
import {Heading} from "@/components/ui/Heading/Heading";

import styles from '@/styles/dashboard.module.scss';

export default async function Home() {
    return (
      <div style={{width:'100%', height:'100%'}}>
          <HeaderSearchbar />
          <div className={styles['dashboard']}>
              <Heading title="Popular" />
              <WallpaperCarousel wallpapers={[]} />
          </div>
      </div>
  );
}

