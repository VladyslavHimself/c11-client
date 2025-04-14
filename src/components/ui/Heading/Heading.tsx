import styles from './heading.module.scss';

type HeadingCustomProperties = {
    titleFontSize?: number,
    subtitleFontSize?: number,
}

type Props = {
    title: string;
    subtitle?: string;
    customProperties?: HeadingCustomProperties
};

export function Heading({ title, subtitle, customProperties }: Props) {
    const { titleFontSize, subtitleFontSize } = customProperties || {};

    return (
        <div className={styles.heading}>
            <h2 style={customProperties?.titleFontSize && { fontSize: titleFontSize } || {}}>{title}</h2>
            <p style={customProperties?.subtitleFontSize && { fontSize: subtitleFontSize } || {}}>{subtitle}</p>
        </div>
    );
}