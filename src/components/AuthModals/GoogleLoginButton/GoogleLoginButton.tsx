'use client';

import styles from './googleLoginButton.module.scss';
import GoogleIcon from "../../../../public/GoogleIcon";
import {signIn} from "next-auth/react";


export default function GoogleLoginButton() {
    return (
        <button className={styles['google-login-button']} onClick={() => signIn("google")}>
            <GoogleIcon />
        </button>
    );
};