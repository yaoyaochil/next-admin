import {NextResponse} from "next/server";
import { cookies } from 'next/headers'
import {systemUser} from "@/model/system/user";


export interface globalResponse {
    code?: number,
    msg?: string,
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
export async function ok(): Promise<NextResponse<globalResponse>> {
    return result(success, 'success', null)
}

/**
 * 成功返回 success = 0
 * @param msg
 */
export async function okMsg(msg: string): Promise<NextResponse<globalResponse>> {
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
export async function okData(data: any, msg: string, code: number = success): Promise<NextResponse<globalResponse>> {
    return result(code, msg, data)
}

/**
 * 失败返回 error = 7
 * @param msg
 */
export async function failMsg(msg: string): Promise<NextResponse<globalResponse>> {
    return result(error, msg, null)
}

/**
 * 登陆 设置cookie
 * @param token
 * @param userInfo
 */
export async function AuthOA(token: string, userInfo: systemUser): Promise<NextResponse<globalResponse>> {
    cookies().set('naToken', token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    })

    cookies().set('ID', userInfo.id.toString(), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    })

    return okData({
        token:token,
        userInfo:userInfo
    }, '登录成功')
}
