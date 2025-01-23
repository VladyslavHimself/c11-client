

'use client'
import styles from './SidebarUserButton.module.scss';
import {ChevronRight} from "lucide-react";
import QuestionMark from '../../../public/QuestionMark';

export default function SidebarUserButton({ user }) {
    return (
        <button className={styles['sidebar-user-button']} tabIndex={1} onClick={() => console.log("pressed")}>
                <div className="sidebar-user-button-avatar">
                    <QuestionMark />
                </div>
                <div className={styles['sidebar-user-button-info']}>
                    { user.name && <div className={styles['sidebar-user-data']}>{`${user.name} ${user.surname}`}</div> }

                    {
                        !user.name && <>
                            <div>Hello, Quest</div>
                            <span>Please login</span>
                        </>
                    }
                </div>

            <div className={styles['sidebar-user-button-more']}>
                <ChevronRight />
            </div>
        </button>
    );
};