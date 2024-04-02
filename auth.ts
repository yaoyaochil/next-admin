import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";
import {AdapterUser} from "@auth/core/adapters";

export const {signIn, signOut, handlers: {POST, GET}} = NextAuth({
    ...authConfig,
})