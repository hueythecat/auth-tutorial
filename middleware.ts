import NextAuth from "next-auth"
import authConfig from "@/auth.config"

import {
    DEFAULT_LOGIN_REDIRECT,
    apiAuthPrefix,
    authRoutes,
    publicRoutes,
} from "@/routes" 
export const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const { nextUrl } = req
    const isLoggedIn = !!req.auth
    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if(isApiAuthRoute) {
        return;
    }

    if (isAuthRoute) {
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        }
        return;
    }   
    
    if(!isLoggedIn && !isPublicRoute){
       
        let callbackUrl = nextUrl.pathname;
        if (nextUrl.search) {
            callbackUrl += nextUrl.search;
        }
       
        const encodedCallbackUrl = encodeURIComponent(callbackUrl);
        console.log('middle', encodedCallbackUrl)
        console.log('next', nextUrl)

        return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
    }   

    // console.log('middleware: auth checks passed')
    return ;
})

// Optionally, don't invoke Middleware on some paths
export const config = {
   // matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}

