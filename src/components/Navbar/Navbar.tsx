import styles from './Navbar.module.scss';
import NavbarItem from "@/components/NavbarItem/NavbarItem";
import HomeIcon from "../../../public/HomeIcon";
import {usePathname} from "next/navigation";
import StarsIcon from "../../../public/StarsIcon";
import GalleryIcon from "../../../public/GalleryIcon";
import FolderIcon from "../../../public/FolderIcon";

export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className={styles.navbar}>
            <NavbarItem Icon={HomeIcon} value="Home" isActive={true} />
            <NavbarItem Icon={StarsIcon} value="Add new" />
            <NavbarItem Icon={GalleryIcon} value="Gallery" />
            <NavbarItem Icon={FolderIcon} value="Favourites" />
            <NavbarItem Icon={StarsIcon} value="Subscriptions" />
        </div>
    );
};