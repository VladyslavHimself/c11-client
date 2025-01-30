import CredentialsLoginForm from "@/components/AuthModals/CredentialsLoginForm/CredentialsLoginForm";
import styles from '@/components/AuthModals/authModals.module.scss';
import GoogleLoginButton from "@/components/AuthModals/GoogleLoginButton/GoogleLoginButton";
import Separator from "@/components/AuthModals/Separator/Separator";
import ModalLayout from "@/components/AuthModals/ModalLayout/ModalLayout";
import AuthModalHeader from "@/components/AuthModals/AuthModalHeader/AuthModalHeader";
import AuthModalFooter from "@/components/AuthModals/AuthModalFooter/AuthModalFooter";

export default function InterceptedSignInPage() {
    return (
        <ModalLayout modalName={styles['auth-modal']}>
            <AuthModalHeader type="sign-in" />
            <GoogleLoginButton />
            <Separator />
            <CredentialsLoginForm />
            <AuthModalFooter type="sign-in" />
        </ModalLayout>
    );
};