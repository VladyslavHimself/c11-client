import styles from './authModalHeader.module.scss'
import LogotypeIcon from "../../../../public/LogotypeIcon";
import {headerTypes, ModalTypeProps} from "@/components/AuthModals/authModals.constants";

export default function AuthModalHeader({ type }: { type: ModalTypeProps }) {
    const { title, description } = headerTypes[type];

    return (
        <>
            <div className={styles['auth-modal-header']}>
                <LogotypeIcon width={80} height={80} />
            </div>
            <div className={styles['auth-modal-subheader']}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </>
    );
}