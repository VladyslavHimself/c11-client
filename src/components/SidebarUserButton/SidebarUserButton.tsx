'use client'

import styles from './sidebarUserButton.module.scss';
import {ChevronRight} from "lucide-react";
import QuestionMark from '../../../public/QuestionMark';
import {UserResponse} from "@/api/Users";
import { useSession } from "next-auth/react"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {Session} from "next-auth/core/types";
import { useRouter} from 'next/navigation'

type Props = {
    user: UserResponse;
}

export default function SidebarUserButton({ user }: Props) {
    const session = useSession();
    const router = useRouter();

    return (
        <>
            <button className={styles['sidebar-user-button']} tabIndex={1} onClick={() => withAuthorizedAccesss(session, onOpenProfile)}>
                <div className="sidebar-user-button-avatar">
                    <QuestionMark />
                </div>
                <div className={styles['sidebar-user-button-info']}>
                    { user && <div className={styles['sidebar-user-data']}>{`${user.name} ${user.surname}`}</div> }

                    {
                        !user && <>
                            <div>Hello, Quest</div>
                            <span>Please login</span>
                        </>
                    }
                </div>

                <div className={styles['sidebar-user-button-more']}>
                    <ChevronRight />
                </div>

            </button>
        </>

    );
    
    function onOpenProfile() {
        console.log('open profile');
    }

    function withAuthorizedAccesss(session: Session, callback: () => void) {
        if (session.status === 'authenticated') {
            return callback();
        }

        router.push('/sign-in');
    }
};


