import styles from './sidebar.module.scss';
import SidebarUserButton from "@/components/SidebarUserButton/SidebarUserButton";
import Navbar from "@/components/Navbar/Navbar";
import LogotypeIcon from "../../../public/LogotypeIcon";
import {UsersAPI} from "@/api/Users";

export default async function Sidebar() {
    const user = await UsersAPI.getUser();
    return (
        <div className={styles.sidebar}>
            <div>
                <SidebarUserButton user={user} />
                <hr className={styles.separator} />
                <Navbar />
            </div>
            <LogotypeIcon className={styles.logotype} />
        </div>
    );
};