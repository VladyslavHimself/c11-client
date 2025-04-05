import styles from '@/styles/profile-page.module.scss';
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import {Heading} from "@/components/ui/Heading/Heading";
import {ImagesAPI} from "@/api/Images";
import UserUploadsCarousel from "@/components/UserUploadsCarousel/UserUploadsCarousel";


export default async function ProfilePage() {
    // TODO: Refactor when the endpoint will have been fixed
    const userUploads = await ImagesAPI.getFavouriteImages();

    return (
        <div className={styles['profile-page']}>

            <div className={styles['profile-page-content-wrapper']}>
                <ProfileHeader />
                <div className={styles['profile-page-uploads-section']}>
                    <Heading title="Your uploads" />
                    <UserUploadsCarousel userUploads={userUploads} />
                </div>
            </div>
        </div>
    );
};