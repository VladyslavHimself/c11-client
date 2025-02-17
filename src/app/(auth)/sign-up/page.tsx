import AuthHeader from "@/components/AuthModals/AuthHeader/AuthHeader";
import Separator from "@/components/AuthModals/Separator/Separator";
import GoogleLoginButton from "@/components/AuthModals/GoogleLoginButton/GoogleLoginButton";
import AuthFooter from "@/components/AuthModals/AuthFooter/AuthFooter";
import {CredentialsSignUpForm} from "@/components/AuthModals/CredentialsSignUpForm/CredentialsSignUpForm";

export default function SignUpPage() {
    return (
        <div style={{color: "white", margin: "auto"}}>
            <AuthHeader type="sign-up" />
            <CredentialsSignUpForm />
            <Separator />
            <GoogleLoginButton />
            <AuthFooter type="sign-up" redirectType="hard" />
        </div>
    );
};