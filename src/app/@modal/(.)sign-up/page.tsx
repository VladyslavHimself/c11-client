import styles from '@/components/AuthModals/authModals.module.scss';
import ModalLayout from "@/components/AuthModals/ModalLayout/ModalLayout";
import AuthModalHeader from "@/components/AuthModals/AuthModalHeader/AuthModalHeader";
import GoogleLoginButton from "@/components/AuthModals/GoogleLoginButton/GoogleLoginButton";
import Separator from "@/components/AuthModals/Separator/Separator";
import AuthModalFooter from "@/components/AuthModals/AuthModalFooter/AuthModalFooter";
import {CredentialsSignUpForm} from "@/components/AuthModals/CredentialsSignUpForm/CredentialsSignUpForm";

export default function InterceptedSignUpPageModal() {
    return (
        <ModalLayout modalName={styles['auth-modal']}>
            <AuthModalHeader type="sign-up" />
            <GoogleLoginButton />
            <Separator />
            <CredentialsSignUpForm />
            <AuthModalFooter type="sign-up" />
        </ModalLayout>
    );
};