import {NextRequest, NextResponse} from "next/server";
import {Middleware} from "@/global/type/middleware";
import {cookies} from "next/headers";
import {verifyJwt} from "@/utils/jwt";



/**
 * 中间件 - 验证
 * @param middleware
 */
export default function Auth(middleware: Middleware) {
    return async (request: NextRequest) => {
        const user_id = cookies().get('ID')?.value;
        const token = cookies().get('token')?.value as string;
        const pathname = request.nextUrl.pathname;
        const isApiRoute = pathname.startsWith('/api');
        const isAdminRoute = pathname.startsWith('/admin');
        const isStaticResource = pathname.match(/\.(css|js|png|jpg|jpeg|svg|gif|txt|ico)$/);
        if ((!isApiRoute && !isStaticResource && pathname !== "/login" && isAdminRoute && !await verifyJwt(token)) || (!isApiRoute && !isStaticResource && pathname !== "/login" && isAdminRoute && user_id === "0")) {
            console.log(
                'isApiRoute', isApiRoute,
                'isStaticResource', isStaticResource,
                'pathname', pathname,
                'isAdminRoute', isAdminRoute,
                'token', token,
                'user_id', user_id
            )
            return NextResponse.redirect(new URL("/login", request.url));
        }
        return middleware(request);
    };
}