import styles from '@/styles/favourites-page.module.scss';
import {Heading} from "@/components/ui/Heading/Heading";
import WallpapersGallery from "@/components/WallpapersGallery/WallpapersGallery";
import {ImagesAPI} from "@/api/Images";

export default async function FavouritesPage() {
    const favouriteWallpapers = await ImagesAPI.getFavouriteImages();

    return (
        <div className={styles['favourites-page']}>
            <div className={styles['favourites-page-content-wrapper']}>
                <Heading title="Your favourites" />
                <WallpapersGallery wallpapers={favouriteWallpapers} />
            </div>
        </div>
    );
};