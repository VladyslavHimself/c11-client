'use client';

import styles from './modalLayout.module.scss';
import {useRouter} from "next/navigation";
import React from "react";


export default function ModalLayout({ children, modalName}: { children: React.ReactNode, modalName: string}) {
    const router = useRouter();

    return (
        <div className={styles['modal-backdrop']} onClick={router.back}>
            <dialog className={`${styles['modal-layout']} ${modalName}`} open onClick={(e) => e.stopPropagation()}>
            { children }
            </dialog>
        </div>
    );
};