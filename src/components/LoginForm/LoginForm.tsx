'use client';


import {z} from "zod";
import {signIn, signOut} from "next-auth/react";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

const loginFormSchema = z.object({
    email: z.string().min(2, {
        message: "Wrong email",
    }),
    password: z.string().min(2, {
        message: "Wrong password",
    }),
})

export function LoginForm() {
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
                location.reload();
            })}>
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Login</Button>
            </form>

            <Button onClick={() => signOut()}>Sign out</Button>
        </Form>
    );
}