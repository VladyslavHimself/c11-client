'use client';

import {useRouter} from "next/navigation";
import styles from "./exploreMoreButton.module.scss";
import NextIcon from "../../../public/NextIcon";

export default function ExploreMoreButton() {
    const router = useRouter();
    return (
        <button className={styles['explore-more-button']} onClick={() => router.push('/explore')}>
            <NextIcon />
            Explore more
        </button>
    );
};