'use client'
import styles from './navbar.module.scss';
import NavbarItem from "@/components/NavbarItem/NavbarItem";
import HomeIcon from "../../../public/HomeIcon";
import StarsIcon from "../../../public/StarsIcon";
import GalleryIcon from "../../../public/GalleryIcon";
import FolderIcon from "../../../public/FolderIcon";
import {usePathname} from "next/navigation";

const generateRoutes = () => [
    {
        title: "Home",
        icon: HomeIcon,
        link: "/",
        action: () => {}
    },
    {
        title: "Add new",
        icon: StarsIcon,
        link: "/add-new",
        action: () => {}
    },
    {
        title: "Explore",
        icon: GalleryIcon,
        link: "/explore",
        action: () => {}
    },
    {
        title: "Favourites",
        icon: FolderIcon,
        link: "/favourites",
        action: () => {}
    },
    {
        title: "Subscriptions",
        icon: StarsIcon,
        link: "/subscriptions",
        action: () => {},
    },
]

export default function Navbar() {
    const pathname = usePathname();
    return (
        <div className={styles.navbar}>
            {
                generateRoutes().map(({ title, icon, link, action}) => {
                    return (
                        <NavbarItem
                            key={title}
                            Icon={icon}
                            value={title}
                            link={link}
                            action={action}
                            isActive={title === "Home" ? pathname.length === 1 : pathname.includes(link)}
                        />
                    );
                })
            }
        </div>
    );
};