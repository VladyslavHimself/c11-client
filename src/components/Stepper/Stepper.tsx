import styles from './stepper.module.scss';
import StepperItem from "@/components/Stepper/StepperItem/StepperItem";
import {StepsInfoType} from "@/components/AddNewPage/addNewPage.types";


type Props = {
    currentStep: number;
    steps: StepsInfoType;
}

export default function Stepper({ currentStep, steps }: Props) {
    const maxSteps = Object.keys(steps).length;

    return (
        <div className={styles['stepper']}>
            <div className={styles['stepper-title']}>
                {steps[currentStep].title}
            </div>
            <div className={styles['stepper-list']}>
                {
                    new Array(maxSteps).fill(null).map((_, i) => (
                        <StepperItem key={i} isHighlighted={currentStep >= i} />
                    ))
                }
            </div>
        </div>
    );
};