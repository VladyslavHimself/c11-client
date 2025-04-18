import styles from './sidebar.module.scss';
import SidebarUserButton from "@/components/SidebarUserButton/SidebarUserButton";
import Navbar from "@/components/Navbar/Navbar";
import LogotypeIcon from "../../../public/LogotypeIcon";
import {UserResponse} from "@/api/Users";
import {getServerSession} from "next-auth";

type Props = {
    user: UserResponse
}

export default async function Sidebar({ user }: Props) {
    const session = await getServerSession();
    return (
        <div className={styles.sidebar}>
            <div>
                <SidebarUserButton user={user} />
                <hr className={styles.separator} />
                <Navbar isAuthenticated={!!session?.user?.email} />
            </div>
            <LogotypeIcon className={styles.logotype} />
        </div>
    );
}