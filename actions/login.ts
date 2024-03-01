"use server"
import * as z from "zod"
import { AuthError } from "next-auth"

import { signIn } from "@/auth"
import { LoginSchema } from "@/schemas"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { generateVerificationToken } from "@/lib/tokens"
import { getUserByEmail } from "@/data/user"

export const login = async (
    values: z.infer<typeof LoginSchema>,
    callbackUrl?: string | null
    ) => {
 
    const validatedFields = LoginSchema.safeParse(values);

    if(!validatedFields.success) {
        return{ error: "Invalid fields" }
    }

    const { email, password } = validatedFields.data;

    const existingUser = await getUserByEmail(email);

    if(!existingUser || !existingUser.password || !existingUser.password ) {   
        return { error: "Email does not exist" }
    }   

    if(!existingUser.emailVerified) {
        const verificationToken = await generateVerificationToken( 
            existingUser.email || ""
        );
        return { success: "Confirmation email sent" }
    }

    if(!validatedFields.success) {
        return{ error:"Invalid fields" }
    }
  
    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
        })
    } catch (error) {
        if(error instanceof AuthError){
            console.log('error', error.type)
            switch(error.type){
                case "CredentialsSignin": {
                    return { error: "Invalid credentials" }
                }
                default: {
                    return { error: "Something went wrong" }
                }
            }
        }
        throw error;
    }
    
    return { success: "Logged in" }
}