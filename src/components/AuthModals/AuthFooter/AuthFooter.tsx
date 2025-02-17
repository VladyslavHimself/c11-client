'use client';
import {useRouter} from "next/navigation";
import styles from './authFooter.module.scss';
import {footerTypes, ModalTypeProps} from "@/components/AuthModals/authModals.constants";

type Props = {
    type: ModalTypeProps;
    redirectType?: 'hard' | 'soft';
};

export default function AuthFooter({ type, redirectType = 'soft' }: Props) {
    const router = useRouter();
    const { text, link, linkText } = footerTypes[type];

    return (
        <div className={styles['auth-footer']}>
            <p>
                {text} <span onClick={redirectHandler} className={styles.link}>{linkText}</span>
            </p>
        </div>
    );

    function redirectHandler() {
        if (redirectType === 'soft') {
            router.replace(link);
        } else {
            window.location.href = link;
        }
    }
}
