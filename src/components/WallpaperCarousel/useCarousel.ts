import {useState} from "react";

export function useCarousel(carouselLimit: number) {
    const [currentIndex, setCurrentIndex] = useState(0);

    function listCarouselToNextFrames() {
        if (currentIndex !== carouselLimit) {
            setCurrentIndex(currentIndex + 1);
        }
    }

    function listCarouselToPrevFrames() {
        if (currentIndex !== 0) {
            setCurrentIndex(prevIndex => prevIndex - 1)
        }
    }

    return [currentIndex, listCarouselToNextFrames, listCarouselToPrevFrames];
}