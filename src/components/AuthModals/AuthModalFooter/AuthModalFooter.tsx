'use client';

import styles from './authModalFooter.module.scss';
import {useRouter} from "next/navigation";
import {footerTypes, ModalTypeProps} from "@/components/AuthModals/authModals.constants";




export default function AuthModalFooter({ type }: { type: ModalTypeProps }) {
    const router = useRouter();
    const { text, link, linkText } = footerTypes[type];

    return (
        <div className={styles['auth-modal-footer']}>
            <p>{text} <span onClick={() => router.replace(link)}>{linkText}</span></p>
        </div>
    );
};
