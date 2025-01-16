'use client';
import styles from './SidebarUserButton.module.scss';
import {ChevronRight} from "lucide-react";
import QuestionMark from '../../../public/QuestionMark';
import {useSession} from "next-auth/react";

export default function SidebarUserButton() {

    const { data: session } = useSession();

    return (
        <button className={styles['sidebar-user-button']} tabIndex={1} onClick={() => console.log("pressed")}>
                <div className="sidebar-user-button-avatar">
                    <QuestionMark/>
                </div>
                <div className={styles['sidebar-user-button-info']}>
                    <div>Hello, Quest</div>
                    {!session && <span>Please login</span>}
                </div>

            <div className={styles['sidebar-user-button-more']}>
                <ChevronRight/>
            </div>
        </button>
    );
};