type footerSchema = {
    text: string;
    linkText: string;
    link: string;
}

export type ModalTypeProps = 'sign-in' | 'sign-up';

export const footerTypes: Record<ModalTypeProps, footerSchema> = {
    'sign-in': {
        text: `Don't have an account?`,
        linkText: 'Sign Up',
        link: '/sign-up',
    },
    'sign-up': {
        text: 'Already have an account?',
        linkText: 'Sign In',
        link: '/sign-in'
    }
}

type headerSchema = {
    title: string;
    description: string;
}

export const headerTypes: Record<ModalTypeProps, headerSchema> = {
    'sign-in': {
        title: "Welcome!",
        description: "Please enter your credentials to sign in"
    },

    'sign-up': {
        title: "Register an account",
        description: "Please register your account"
    }
}