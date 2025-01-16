import styles from './NavbarItem.module.scss';
import React, {SVGProps} from "react";
import Link from "next/link";
type Props = {
    Icon: (props: SVGProps<SVGSVGElement>) => Element;
    value: string;
    isActive: boolean;
    link: string;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    action: Function;
}

export default function NavbarItem({ Icon, value, link, action, isActive }: Props) {
    return (
        <Link onClick={action} href={link || '#'} className={`${styles['navbar-item']} ${isActive && styles['is-active']}`}>
            <Icon />
            <span>{value}</span>
        </Link>
    );
};