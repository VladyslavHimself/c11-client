import HeaderSearchbar from "@/components/HeaderSearchbar/HeaderSearchbar";
import WallpaperCarousel from "@/components/WallpaperCarousel/WallpaperCarousel";
import {Heading} from "@/components/ui/Heading/Heading";

import styles from '@/styles/dashboard.module.scss';
import {ImagesAPI} from "@/api/Images";
import PopularTopicsBoard from "@/components/PopularTopicsBoard/PopularTopicsBoard";
import NextIcon from "../../../public/NextIcon";

const mockedTopicsData = [
    {
        id: '1',
        name: 'Anime',
        created_at: '2020-02-09T00:00:00.000Z',
        imageUrl: 'https://i.pinimg.com/1200x/c8/b7/41/c8b7413ccd33544ab59691a09a7b4107.jpg'
    },

    {
        id: '2',
        name: 'Statues',
        created_at: '2020-02-09T00:00:00.000Z',
        imageUrl: 'https://i.pinimg.com/1200x/a0/de/cf/a0decf534a6573701c8c1dd8064de6cc.jpg'
    },

    {
        id: '3',
        name: 'Aesthetics',
        created_at: '2020-02-09T00:00:00.000Z',
        imageUrl: 'https://i.pinimg.com/1200x/69/4d/1c/694d1c55a51c240a5a98da3df18ea0ba.jpg'
    },

    {
        id: '4',
        name: 'K-pop',
        created_at: '2020-02-09T00:00:00.000Z',
        imageUrl: 'https://i.pinimg.com/1200x/3b/d4/78/3bd47853eee3a5deb012d7f0ed442e2c.jpg'
    }
]

export default async function Home() {
    const wallpapers = await ImagesAPI.getPopularImages();

    return (
      <div style={{height:'100vh', flex: '1 1 100%', overflow: 'auto'}}>
          <HeaderSearchbar />
          <div className={styles['dashboard']}>
              <div className={styles['dashboard-section']}>
                  <Heading title="Popular" />
                  <div className="popular-wallpapers">
                      <WallpaperCarousel wallpapers={wallpapers} />
                  </div>
              </div>

              <div className={styles['dashboard-section']}>
                  <Heading title="Explore popular topics" />
                  <div className={styles['popular-topics']}>
                      <PopularTopicsBoard topics={mockedTopicsData} />
                      <button className={styles['explore-more-button']}>
                          <NextIcon />
                          Explore more
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

