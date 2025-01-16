'use client'

import styles from './sidebar.module.scss';
import SidebarUserButton from "@/components/SidebarUserButton/SidebarUserButton";
import Navbar from "@/components/Navbar/Navbar";
import LogotypeIcon from "../../../public/LogotypeIcon";

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <div>
                <SidebarUserButton />
                <hr className={styles.separator} />
                <Navbar />
            </div>
            <LogotypeIcon className={styles.logotype} />
        </div>
    );
};

// {!session && <p>Not signed in!</p>}
// {session && <button onClick={() => signOut()}>Sign out</button>}