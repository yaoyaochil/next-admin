import type { NextAuthConfig } from 'next-auth';
import Credentials from "@auth/core/providers/credentials";
import {z} from "zod";
import {getUserInfoById, getUserInfoByUsername} from "@/service/system/sysUserService";
import {decrypt} from "@/utils/bcrypt";
import {NextResponse} from "next/server";
export const authConfig = {
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z.object({username: z.string(), password: z.string()}).safeParse(credentials);
                if (parsedCredentials.success) {
                    const {username, password} = parsedCredentials.data;
                    const user = await getUserInfoByUsername(username);
                    if (user && decrypt(user.password, password)) {
                        return user
                    }
                    return null;
                }
                return null;
            },

        })
    ],
    events: {
        async signIn({user}) {
            let userInfo = null;
            if (user.id) {
                userInfo = await getUserInfoById(user.id)
            }
            user = {
                ...user,
                ...userInfo
            }
        }
    },
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async authorized({ auth, request: { nextUrl } }) {
            const isAdminPage = nextUrl.pathname.startsWith('/admin')
            if (isAdminPage && !auth) {
                return NextResponse.redirect(new URL('/login', nextUrl))
            }
            return true;
        },
        async session({session, token, user}) {
            if (token.sub) {
                session.user.id = token.sub;
            }
            return session;
        },
        async jwt({token, user}) {
            if (user) {
                token.sub = user.id;
                token.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7; // 7 days
            }
            return token;
        },
        async signIn({user, account, profile, email, credentials}) {
            return true;
        }
    },
} satisfies NextAuthConfig;