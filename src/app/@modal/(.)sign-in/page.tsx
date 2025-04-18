import CredentialsLoginForm from "@/components/AuthModals/CredentialsLoginForm/CredentialsLoginForm";
import styles from '@/components/AuthModals/authModals.module.scss';
import GoogleLoginButton from "@/components/AuthModals/GoogleLoginButton/GoogleLoginButton";
import Separator from "@/components/AuthModals/Separator/Separator";
import ModalLayout from "@/components/AuthModals/ModalLayout/ModalLayout";
import AuthHeader from "@/components/AuthModals/AuthHeader/AuthHeader";
import AuthFooter from "@/components/AuthModals/AuthFooter/AuthFooter";
import featureFlags from '@/config/local-feature-flags.json';

export default function InterceptedSignInPage() {
    return (
        <ModalLayout modalName={styles['auth-modal']}>
            <AuthHeader type="sign-in" />
            {
                featureFlags.isGoogleAuthEnabled && (
                   <>
                       <GoogleLoginButton />
                       <Separator />
                   </>
                )
            }
            <CredentialsLoginForm />
            <AuthFooter type="sign-in" />
        </ModalLayout>
    );
};