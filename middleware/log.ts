import {Middleware} from "@/global/type/middleware";


/**
 * 中间件 - 日志
 * @param middleware
 */
export default function logMiddleware(middleware:Middleware) {
    return async (request:any) => {
        if (request.nextUrl.pathname.startsWith("/api")) {
            const result = await middleware(request); // 执行请求
            // 打印请求信息和请求耗时
            console.info(`[${new Date().toLocaleString()}] ${request.nextUrl.pathname} ${request.nextUrl.search} ${request.method} ${request.headers.get("user-agent")}`);
            return result;
        }
    };
}