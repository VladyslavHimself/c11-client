import styles from './separator.module.scss';

export default function Separator() {
    return (
        <div className={styles.separator}>
            <hr />
            <span>or</span>
            <hr />
        </div>
    );
};