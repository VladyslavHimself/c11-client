import UserIcon from "../../../public/UserIcon";
import SettingsButton from "@/components/SettingsButton/SettingsButton";
import styles from "./profileHeader.module.scss";
import {UsersAPI} from "@/api/Users";

export default async function ProfileHeader() {
    const { name, surname } = await UsersAPI.getUser();

    return (
        <div className={styles['profile-header']}>
            <div className={styles['profile-header-avatar']}>
                <UserIcon />
            </div>

            <div className={styles['profile-header-user-info']}>
                <div className={styles["profile-header-user-info-initials"]}>{[name, surname].join(' ')}</div>
                <div>999+ posts</div>
            </div>

            <div className={styles['profile-header-settings-button']}>
                <SettingsButton />
            </div>
        </div>
    );
};