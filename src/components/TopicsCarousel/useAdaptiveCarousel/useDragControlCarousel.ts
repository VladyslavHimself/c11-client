import React, {useEffect} from "react";

export default function useDragControlCarousel() {
    const carouselOuterRef = React.useRef<HTMLDivElement>(null);
    const carouselInnerRef = React.useRef<HTMLDivElement>(null);

    const [dragConstraints, setDragConstraints] = React.useState({ left: 0, right: 0 });

    useEffect(() => {
        const updateConstraints = () => {
            if (carouselOuterRef.current && carouselInnerRef.current) {
                const containerWidth = carouselOuterRef.current.offsetWidth;
                const innerWidth = carouselInnerRef.current.scrollWidth;

                const leftConstraint = containerWidth - innerWidth;

                setDragConstraints({ right: 0, left: leftConstraint < 0 ? leftConstraint : 0 });
            }
        };

        updateConstraints();
        window.addEventListener("resize", updateConstraints);

        return () => {
            window.removeEventListener("resize", updateConstraints);
        };
    }, []);

    return  { carouselOuterRef, carouselInnerRef, dragConstraints };
};
