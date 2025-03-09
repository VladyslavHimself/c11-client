'use client';

import styles from './modalLayout.module.scss';
import {useRouter} from "next/navigation";
import React, {useEffect} from "react";


export default function ModalLayout({ children, modalName}: { children: React.ReactNode, modalName: string}) {
    const router = useRouter();

    useEffect(() => {
        function inspectCloseHotkey(e: KeyboardEvent) {
            if (e.code === 'Escape') {
                router.back();
            }
        }

        window.addEventListener('keydown', inspectCloseHotkey);

        return () => window.removeEventListener('keydown', inspectCloseHotkey)
    }, [router]);

    return (
        <div className={styles['modal-backdrop']} onClick={router.back}>
            <dialog className={`${styles['modal-layout']} ${modalName}`} open onClick={(e) => e.stopPropagation()}>
            { children }
            </dialog>
        </div>
    );
};