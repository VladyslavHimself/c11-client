import styles from './stepperItem.module.scss';

type Props = {
    isHighlighted: boolean;
};

export default function StepperItem({ isHighlighted }: Props) {
    return (
        <div data-is-highlight={isHighlighted} className={styles['stepper-item']} />
    );
};