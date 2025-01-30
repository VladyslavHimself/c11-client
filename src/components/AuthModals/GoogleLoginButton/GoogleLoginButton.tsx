import styles from './googleLoginButton.module.scss';
import GoogleIcon from "../../../../public/GoogleIcon";


export default function GoogleLoginButton() {
    return (
        <button className={styles['google-login-button']}>
            <GoogleIcon />
        </button>
    );
};