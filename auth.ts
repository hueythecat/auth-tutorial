import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"

import { db } from "@/lib/db"
import authConfig from "@/auth.config"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
    adapter: PrismaAdapter({ db }),
    session: { strategy: "jwt" }, //prisma session does not work on the edge
    ...authConfig,
})