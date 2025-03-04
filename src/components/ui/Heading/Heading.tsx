import styles from './heading.module.scss';

type Props = {
    title: string;
    subtitle?: string;
};

export function Heading({ title, subtitle }: Props) {

    return (
        <div className={styles.heading}>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    );
};