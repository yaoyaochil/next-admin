import {NextRequest, NextResponse} from 'next/server'
import logMiddleware from "@/middleware/log";
import NextAuth from "next-auth";
import {authConfig} from "@/auth.config";

/**
 * 中间件
 * @param request
 */
export async function middleware(request:NextRequest) {
    return chain([
        NextAuth(authConfig).auth, // 认证 - 用于登录 - 退出登录 权限验证
        logMiddleware, // 日志
    ])(request)
}

/**
 * 链式调用
 * @param functions
 * @param index
 * 执行顺序：F1 -> F2 -> F3 -> F4
 */
function chain(functions: Function[],index:number = 0) {
    const current = functions[index] // 当前函数
    if (current) { // 如果当前函数存在
        const next = chain(functions, index + 1) as Function; // 下一个函数
        return current(next); // 执行当前函数
    }
    // 换言之 - 直接执行下一个函数
    return () => NextResponse.next(); // 返回一个空函数 - 用于结束链式调用 - 也就是说，如果没有下一个函数了，就返回一个空函数
}

export const config = {
    matcher: ["/((?!api/auth|_next/static|_next/image|favicon.ico).*)"],
}