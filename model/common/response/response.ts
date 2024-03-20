import {NextResponse} from "next/server";

export interface Response {
    code: number,
    msg: string,
    data?: any
}

const
    error = 7,
    success = 0

/**
 * 返回结果
 * @param code
 * @param msg
 * @param data
 */
export async function result(code: number, msg: string, data?: any) {
    return NextResponse.json({code, msg, data})
}

/**
 * 成功返回 success = 0
 */
export async function ok(): Promise<NextResponse<Response>> {
    return result(success, 'success', null)
}

/**
 * 成功返回 success = 0
 * @param msg
 */
export async function okMsg(msg: string): Promise<NextResponse<Response>> {
    return result(success, msg, null)
}



/**
 * 成功并返回数据
 * @param data
 * @param msg
 * @param code
 * @constructor
 * @return
 */
export async function okData(data: any, msg: string, code: number = success): Promise<NextResponse<Response>> {
    return result(code, msg, data)
}

/**
 * 失败返回 error = 7
 * @param msg
 */
export async function failMsg(msg: string): Promise<NextResponse<Response>> {
    return result(error, msg, null)
}
