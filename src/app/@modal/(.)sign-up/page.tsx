import styles from '@/components/AuthModals/authModals.module.scss';
import ModalLayout from "@/components/AuthModals/ModalLayout/ModalLayout";
import AuthHeader from "@/components/AuthModals/AuthHeader/AuthHeader";
import GoogleLoginButton from "@/components/AuthModals/GoogleLoginButton/GoogleLoginButton";
import Separator from "@/components/AuthModals/Separator/Separator";
import AuthFooter from "@/components/AuthModals/AuthFooter/AuthFooter";
import {CredentialsSignUpForm} from "@/components/AuthModals/CredentialsSignUpForm/CredentialsSignUpForm";
import featureFlags from '@/config/local-feature-flags.json';

export default function InterceptedSignUpPageModal() {
    return (
        <ModalLayout modalName={styles['auth-modal']}>
            <AuthHeader type="sign-up" />
            {
                featureFlags.isGoogleAuthEnabled && (
                    <>
                        <GoogleLoginButton />
                        <Separator />
                    </>
                )
            }
            <CredentialsSignUpForm />
            <AuthFooter type="sign-up" />
        </ModalLayout>
    );
};