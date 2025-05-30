
import styles from '@/styles/search-wallpapers-page.module.scss';
import HeaderSearchbar from "@/components/HeaderSearchbar/HeaderSearchbar";
import {Heading} from "@/components/ui/Heading/Heading";
import {ImagesAPI} from "@/api/Images";
import WallpapersGallery from "@/components/WallpapersGallery/WallpapersGallery";

type Params = {
    searchParams: Promise<{
        query: string;
    }>
}

export default async function SearchWallpapersPage(props: Params) {
    const searchParams = await props.searchParams;
    const searchParam = await searchParams.query;
    const foundImages = await ImagesAPI.searchImages(99, searchParam);

    return (
        <div className={styles['search-wallpapers-page']}>
            <HeaderSearchbar />
            <div className={styles['search-wallpapers-page-content-wrapper']}>
                <Heading title={`Search for ${searchParam}`} subtitle={`Found ${foundImages.totalHits} wallpapers`} />
                <WallpapersGallery wallpapers={foundImages.hits} />
            </div>
        </div>
    );
};
