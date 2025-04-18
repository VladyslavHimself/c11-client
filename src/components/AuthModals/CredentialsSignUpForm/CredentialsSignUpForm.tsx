'use client';

import {z} from "zod";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import styles from './credentialsSignUpForm.module.scss';
import {Button} from "@/components/ui/button";
import {useRouter} from "next/navigation";
import { signUpUserViaCredentials } from "@/actions/auth";
import { revalidateAllPathes } from "@/actions/pathesRevalidators";
import {signIn} from "next-auth/react";

const signUpFormSchema = z.object({
    name: z.string().min(2, {
        message: "Username required",
    }),
    surname: z.string().min(2, {
        message: "Surname required",
    }),
    email: z.string().min(2, {
        message: "Wrong email",
    }),
    password: z.string().min(2, {
        message: "Wrong password",
    })
})

export function CredentialsSignUpForm() {
    const router = useRouter();
    const form = useForm<z.infer<typeof signUpFormSchema>>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            name: "",
            surname: "",
            email: "",
            password: "",
        }
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(async (values: z.infer<typeof signUpFormSchema>) => {
                const res = await signUpUserViaCredentials(values);

                if (res.accessToken) {
                    await signIn("credentials", {
                        redirect: false,
                        email: values.email,
                        password: values.password,
                    })
                    await revalidateAllPathes();
                    router.back();
                }
            })}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem className={styles['auth-form-input-field']}>
                            <FormControl>
                                <Input placeholder="Name" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="surname"
                    render={({ field }) => (
                        <FormItem className={styles['auth-form-input-field']}>
                            <FormControl>
                                <Input placeholder="Surname" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className={styles['auth-form-input-field']}>
                            <FormControl>
                                <Input placeholder="E-mail" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem className={styles['auth-form-input-field']}>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button className="w-full mt-6" size="lg" variant="accent" type="submit">Sign Up</Button>
            </form>
        </Form>
    );
}