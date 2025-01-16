import styles from './NavbarItem.module.scss';
import React, {SVGProps} from "react";

type Props = {
    Icon: (props: SVGProps<SVGSVGElement>) => Element;
    value: string;
    isActive: boolean;
}

export default function NavbarItem({ Icon, value, isActive }: Props) {
    return (
        <button className={`${styles['navbar-item']} ${isActive && styles['is-active']}`}>
            <Icon />
            <span>{value}</span>
        </button>
    );
};