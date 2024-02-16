"use client"

import { CardWrapper } from "@/components/auth/card-wrapper"

import { useTransition, useState } from "react"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useSearchParams } from "next/navigation"

import { LoginSchema } from "@/schemas"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { login } from "@/actions/login"

export const LoginForm = () => {
    const searchParams = useSearchParams();
    const urlError = searchParams.get("error") === "OAuthAccountNotLinked"
        ? "Email already linked with anothe provider!"
        : ""

    const [isPending, startTransition] = useTransition() 
    const [error, setError] = useState<string | undefined>(undefined)
    const [success, setSuccess] = useState<string | undefined>(undefined)
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        console.log('client deets',values);
        setError("")
        setSuccess("")
   
        startTransition(() => {
            login(values)
                .then((data) => {
                if (data?.error) {
                form.reset();
                setError(data.error);
                }

                if (data?.success) {
                form.reset();
                setSuccess(data.success);
                }
            })
            .catch(() => setError("Something went wrong"));
        });
    }
                        
    
    
    return (
    <CardWrapper
        headerLabel="Welcome back"
        backButtonLabel="Don't have an account?"
        backButtonHref="/auth/register"
        showSocial
        >
            <Form {...form}>
                <form 
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                    >
                        <div className="space-y-4">
                            <FormField
                                control={form.control}
                                disabled={isPending}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input 
                                            {...field}
                                            placeholder="john.doe@example.com"
                                            type="email" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                disabled={isPending}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input 
                                            {...field}
                                            placeholder="******"
                                            type="password" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <FormError message={error || urlError}/>
                        <FormSuccess message={success}/>
                        <Button
                            type="submit"   
                            disabled={isPending}
                            className="w-full"
                            >
                            Login
                        </Button>
                    </form>
            </Form>
        
        </CardWrapper>
    )
}
