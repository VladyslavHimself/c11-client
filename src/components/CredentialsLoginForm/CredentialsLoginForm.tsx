'use client';


import {z} from "zod";
import {signIn} from "next-auth/react";
import {Form, FormControl, FormField, FormItem} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import styles from './credentialsLoginForm.module.scss';
import {Button} from "@/components/ui/button";

const loginFormSchema = z.object({
    email: z.string().min(2, {
        message: "Wrong email",
    }),
    password: z.string().min(2, {
        message: "Wrong password",
    }),
})

export function CredentialsLoginForm() {
    const form = useForm<z.infer<typeof loginFormSchema>>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(async (values: z.infer<typeof loginFormSchema>) => {
                await signIn("credentials", {
                    redirect: false,
                    email: values.email,
                    password: values.password,
                });
                window.location.replace("/");
            })}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className={styles['signin-form-input-field']}>
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
                        <FormItem className={styles['signin-form-input-field']}>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button className="w-full mt-6" size="lg" variant="accent" type="submit">Sign In</Button>
            </form>
        </Form>
    );
}