import styles from "./slidebarFrame.module.scss";
import Image from "next/image";
import {StaticImport} from "next/dist/shared/lib/get-img-props";

type Props = {
    image: StaticImport;
    alt: string;

}

export default function SlidebarFrame({ alt, image }: Props) {
    return (
        <div className={styles['slidebar-frame']}>
            <Image fill objectFit="cover" src={image} alt={alt} />
        </div>
    );
};