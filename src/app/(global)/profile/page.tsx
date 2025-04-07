import styles from '@/styles/profile-page.module.scss';
import ProfileHeader from "@/components/ProfileHeader/ProfileHeader";
import {Heading} from "@/components/ui/Heading/Heading";
import {ImagesAPI} from "@/api/Images";
import UserUploadsCarousel from "@/components/UserUploadsCarousel/UserUploadsCarousel";
import CreatedTopicsCarousel from "@/components/CreatedTopicsCarousel/CreatedTopicsCarousel";
import {TopicsAPI} from "@/api/Topics";
import AddNewButton from "@/components/AddNewButton/AddNewButton";


export default async function ProfilePage() {
    // TODO: Refactor when the endpoint will have been fixed
    const userUploads = await ImagesAPI.getUserUploadedImages();
    const userCreatedTopics =  await TopicsAPI.getPopularTopics(10);

    return (
        <div className={styles['profile-page']}>

            <div className={styles['profile-page-content-wrapper']}>
                <ProfileHeader />
                <div className={styles['profile-page-uploads-section']}>
                    <Heading title="Your uploads" />
                    <UserUploadsCarousel userUploads={userUploads} />
                </div>

                <div className={styles['profile-page-created-topics-section']}>
                    <div>
                        <Heading title="The topics you created" />
                        <AddNewButton />
                    </div>
                    <CreatedTopicsCarousel topics={userCreatedTopics} />
                </div>
            </div>
        </div>
    );
};