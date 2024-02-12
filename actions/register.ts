"use server"
import * as z from "zod"
import { RegisterSchema } from "@/schemas"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { getUserByEmail } from "@/data/user"

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    console.log('server values', values)
    const validatedFields = RegisterSchema.safeParse(values);

    if(!validatedFields.success) {
        //throw new Error('Invalid fields')
        return{ error: "Invalid fields" }
    }

    const { email, password, name } = validatedFields.data
    const hashedPassword = await bcrypt.hash(password, 10)
    const existingUser = await getUserByEmail(email)
  
    if( existingUser ) {
        return{ error: "Email already in use!" }
    } else {
        await db.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
            }
        })
        // TODO: send email 
    }

 
    return { success: "User created!" }
}