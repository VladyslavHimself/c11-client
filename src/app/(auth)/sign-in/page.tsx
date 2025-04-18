import AuthHeader from "@/components/AuthModals/AuthHeader/AuthHeader";
import AuthFooter from "@/components/AuthModals/AuthFooter/AuthFooter";
import CredentialsLoginForm from "@/components/AuthModals/CredentialsLoginForm/CredentialsLoginForm";
import GoogleLoginButton from "@/components/AuthModals/GoogleLoginButton/GoogleLoginButton";
import Separator from "@/components/AuthModals/Separator/Separator";
import featureFlags from '@/config/local-feature-flags.json';


export default function SignInPage() {
    return (
        <div style={{color: "white", margin: "auto"}}>
            <AuthHeader type="sign-in" />
            <CredentialsLoginForm />
            {
                featureFlags.isGoogleAuthEnabled && (
                   <>
                       <Separator />
                       <GoogleLoginButton />
                   </>
                )
            }
            <AuthFooter type="sign-in" redirectType="hard" />
        </div>
    );
};