import styles from './navbarItem.module.scss';
import React, {ReactNode, SVGProps} from "react";
import Link from "next/link";
type Props = {
    Icon: (props: SVGProps<SVGSVGElement>) => ReactNode;
    value: string;
    isActive: boolean;
    link: string;
    action: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavbarItem({ Icon, value, link, action, isActive }: Props) {
    return (
        <Link onClick={action} href={link || '#'} className={`${styles['navbar-item']} ${isActive && styles['is-active']}`}>
            <Icon />
            <span>{value}</span>
        </Link>
    );
};