import {Middleware} from "@/global/type/middleware";


/**
 * 中间件 - 日志
 * @param middleware
 */
export default function logMiddleware(middleware:Middleware) {
    const start = performance.now(); // 记录请求开始时间
    return async (request:any) => {
        if (request.nextUrl.pathname.startsWith("/api")) {
            const result = await middleware(request); // 执行请求
            const end = performance.now(); // 记录请求结束时间
            const durationInMs = end - start; // 计算请求耗时（毫秒）
            const durationInUs = durationInMs * 1000; // 转换为微秒
            // 打印请求信息和请求耗时
            console.info(`[${new Date().toLocaleString()}] ${request.nextUrl.pathname} ${request.nextUrl.search} ${request.method} ${request.headers.get("user-agent")} Duration(Not working): ${durationInMs.toFixed(2)}ms (${durationInUs.toFixed(2)}μs)`);
            return result;
        }
    };
}