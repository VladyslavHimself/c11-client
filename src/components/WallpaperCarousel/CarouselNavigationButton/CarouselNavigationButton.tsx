import {PropsWithChildren} from "react";
import styles from './carouselNavigationButton.module.scss';

type Props = {
    action: () => void,
    isHidden: boolean,
};

export default function CarouselNavigationButton({ children, action, isHidden}: PropsWithChildren<Props> ) {
    return (
        <button
            data-isHidden={isHidden}
            className={styles['carousel-navigation-button']}
            onClick={action}
        >
            { children }
        </button>
    );
};