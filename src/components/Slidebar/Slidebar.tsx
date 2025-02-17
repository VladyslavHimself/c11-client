import styles from './slidebar.module.scss';
import Preset1 from '@/../public/wallps/anime-girl-4k-wallpaper-uhdpaper.com-923@0@i (1).jpg'
import Preset2 from '@/../public/wallps/afThyTH.jpeg'
import Preset3 from '@/../public/wallps/3sqDjLg.png'
import Preset4 from '@/../public/wallps/DOpXgkq.jpeg'
import Preset5 from '@/../public/wallps/GhFP5xD.jpeg'
import Preset6 from '@/../public/wallps/hFrAJBh.jpeg'
import Preset7 from '@/../public/wallps/white-hair-5120x2560-v0-kz6xhkjgzdda1.webp'
import SlidebarFrame from "@/components/Slidebar/SlidebarFrame/SlidebarFrame";
export default async function Slidebar() {
    return (
        <div className={styles['slidebar']}>
            <div className={styles['slidebar-strip']}>
                <SlidebarFrame image={Preset1} alt={"anime girl"} />
                <SlidebarFrame image={Preset2} alt={"anime girl"} />
                <SlidebarFrame image={Preset3} alt={"anime girl"} />
                <SlidebarFrame image={Preset4} alt={"anime girl"} />
                <SlidebarFrame image={Preset5} alt={"anime girl"} />
                <SlidebarFrame image={Preset6} alt={"anime girl"} />
                <SlidebarFrame image={Preset7} alt={"anime girl"} />

                <SlidebarFrame image={Preset1} alt={"anime girl"} />
                <SlidebarFrame image={Preset2} alt={"anime girl"} />
                <SlidebarFrame image={Preset3} alt={"anime girl"} />
                <SlidebarFrame image={Preset4} alt={"anime girl"} />
                <SlidebarFrame image={Preset5} alt={"anime girl"} />
                <SlidebarFrame image={Preset6} alt={"anime girl"} />
                <SlidebarFrame image={Preset7} alt={"anime girl"} />

                <SlidebarFrame image={Preset1} alt={"anime girl"} />
                <SlidebarFrame image={Preset2} alt={"anime girl"} />
                <SlidebarFrame image={Preset3} alt={"anime girl"} />
                <SlidebarFrame image={Preset4} alt={"anime girl"} />
                <SlidebarFrame image={Preset5} alt={"anime girl"} />
                <SlidebarFrame image={Preset6} alt={"anime girl"} />
                <SlidebarFrame image={Preset7} alt={"anime girl"} />
            </div>

            <div className={`${styles['slidebar-strip']} ${styles['slidebar-strip-reversed']}`}>
                <SlidebarFrame image={Preset1} alt={"anime girl"} />
                <SlidebarFrame image={Preset2} alt={"anime girl"} />
                <SlidebarFrame image={Preset3} alt={"anime girl"} />
                <SlidebarFrame image={Preset4} alt={"anime girl"} />
                <SlidebarFrame image={Preset5} alt={"anime girl"} />
                <SlidebarFrame image={Preset6} alt={"anime girl"} />
                <SlidebarFrame image={Preset7} alt={"anime girl"} />

                <SlidebarFrame image={Preset1} alt={"anime girl"} />
                <SlidebarFrame image={Preset2} alt={"anime girl"} />
                <SlidebarFrame image={Preset3} alt={"anime girl"} />
                <SlidebarFrame image={Preset4} alt={"anime girl"} />
                <SlidebarFrame image={Preset5} alt={"anime girl"} />
                <SlidebarFrame image={Preset6} alt={"anime girl"} />
                <SlidebarFrame image={Preset7} alt={"anime girl"} />

                <SlidebarFrame image={Preset1} alt={"anime girl"} />
                <SlidebarFrame image={Preset2} alt={"anime girl"} />
                <SlidebarFrame image={Preset3} alt={"anime girl"} />
                <SlidebarFrame image={Preset4} alt={"anime girl"} />
                <SlidebarFrame image={Preset5} alt={"anime girl"} />
                <SlidebarFrame image={Preset6} alt={"anime girl"} />
                <SlidebarFrame image={Preset7} alt={"anime girl"} />
            </div>
        </div>
    );
}