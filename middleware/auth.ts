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
        console.log('user_id',user_id)
        console.log('token',token)
        console.log('verifyToken',await verifyJwt(token))
        const pathname = request.nextUrl.pathname;
        const isApiRoute = pathname.startsWith('/api');
        const isAdminRoute = pathname.startsWith('/admin');
        const isStaticResource = pathname.match(/\.(css|js|png|jpg|jpeg|svg|gif|txt)$/);
        if (!isApiRoute && !isStaticResource && pathname !== "/login" && isAdminRoute && !await verifyJwt(token)) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
        return middleware(request);
    };
}