'use server'
import {signIn, signOut} from "@/auth";
import {AuthError} from "next-auth";

/**
 * 登录
 * @param credentials 用户名和密码
 * @returns 登录结果
 */
export async function loginWithCredentials(credentials: { username: string, password: string }) {
    try {
        await signIn('credentials', {username: credentials.username, password: credentials.password,redirectTo: '/admin/dashboard'});
    } catch (error) {
        if (error instanceof AuthError) {
            return {
                error: '用户名或密码错误',
            };
        }
        // 这里一定要抛出异常，不然成功登录后不会重定向
        throw error;
    }
}


/**
 * 登出
 */
export async function logout() {
    try {
        await signOut();
    } catch (error) {
        throw error;
    }
}