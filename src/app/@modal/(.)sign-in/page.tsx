'use client';

import {CredentialsLoginForm} from "@/components/CredentialsLoginForm/CredentialsLoginForm";
import styles from './signinModal.module.scss';
import { useRouter } from "next/navigation";
import LogotypeIcon from "../../../../public/LogotypeIcon";
import GoogleLoginButton from "@/components/GoogleLoginButton/GoogleLoginButton";
import Separator from "@/components/Separator/Separator";
import Link from "next/link";

export default function InterceptedSignInPage() {
    const router = useRouter();

    return (
        <div className={styles.modal} onClick={router.back}>
            <dialog open onClick={(e) => e.stopPropagation()}>
                <div className={styles['signin-modal-header']}>
                    <LogotypeIcon width={80} height={80} />
                </div>
                <div className={styles['signin-modal-subheader']}>
                    <h2>Welcome!</h2>
                    <p>Please enter your credentials to sign in</p>
                </div>
                <GoogleLoginButton />
                <Separator />
                <CredentialsLoginForm />
                <div className={styles['signin-modal-footer']}>
                    <p>Don&#39;t have an account? <Link href={"/sign-up"}>Sign Up</Link></p>
                </div>
            </dialog>
        </div>
    );
};