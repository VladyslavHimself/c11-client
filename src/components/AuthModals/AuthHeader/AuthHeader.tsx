import styles from './authHeader.module.scss'
import LogotypeIcon from "../../../../public/LogotypeIcon";
import {headerTypes, ModalTypeProps} from "@/components/AuthModals/authModals.constants";

export default function AuthHeader({ type }: { type: ModalTypeProps }) {
    const { title, description } = headerTypes[type];

    return (
        <>
            <div className={styles['auth-header']}>
                <LogotypeIcon width={80} height={80} />
            </div>
            <div className={styles['auth-subheader']}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </>
    );
}