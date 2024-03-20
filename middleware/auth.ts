import {NextRequest, NextResponse} from "next/server";
import {Middleware} from "@/global/type/middleware";



/**
 * 中间件 - 验证
 * @param middleware
 */
export default function Auth(middleware: Middleware) {
    return async (request: NextRequest) => {
        // Do something with the request
        if (request.nextUrl.pathname === "/admin") {
            // 跳转到/admin/dashboard
            return NextResponse.redirect(new URL("/admin/dashboard", request.url));
        }
        return middleware(request);
    };
}