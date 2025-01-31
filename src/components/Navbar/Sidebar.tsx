import styles from './sidebar.module.scss';
import SidebarUserButton from "@/components/SidebarUserButton/SidebarUserButton";
import Navbar from "@/components/Navbar/Navbar";
import LogotypeIcon from "../../../public/LogotypeIcon";
import {UserResponse} from "@/api/Users";

type Props = {
    user: UserResponse
}

export default async function Sidebar({ user }: Props) {
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
}