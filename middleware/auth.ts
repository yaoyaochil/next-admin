import {NextRequest, NextResponse} from "next/server";
import {Middleware} from "@/global/type/middleware";
import {cookies} from "next/headers";
import {verifyJwt} from "@/utils/jwt";
import {failMsg} from "@/model/common/response/response";

const auth_url = [
    "/api/system"
]

/**
 * 中间件 - 验证
 * @param middleware
 */
export default function Auth(middleware: Middleware) {
    return async (request: NextRequest) => {
        if (!await isLogin(request)) {
            return NextResponse.redirect(new URL("/login", request.url));
        }
        if (await isAuth(request) && !await verifyJwt(cookies().get('naToken')?.value as string)){
            return failMsg("未授权");
        }
        return middleware(request);
    };
}


/**
 * 是否登录
 * @param request
 */
async function isLogin(request: NextRequest) {
    const user_id = cookies().get('ID')?.value;
    const token = cookies().get('naToken')?.value as string;
    const pathname = request.nextUrl.pathname;
    const isApiRoute = pathname.startsWith('/api');
    const isAdminRoute = pathname.startsWith('/admin');
    const isStaticResource = pathname.match(/\.(css|js|png|jpg|jpeg|svg|gif|txt|ico)$/);
    return !((!isApiRoute && !isStaticResource && pathname !== "/login" && isAdminRoute && !await verifyJwt(token)) || (!isApiRoute && !isStaticResource && pathname !== "/login" && isAdminRoute && user_id === "0"));
}

/**
 * 接口鉴权
 * @param request
 */
export async function isAuth(request: NextRequest) {
    // 如果访问路径的前缀包含在auth_url中，则需要鉴权
    return auth_url.some(url => request.nextUrl.pathname.startsWith(url));
}