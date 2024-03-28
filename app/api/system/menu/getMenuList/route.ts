import {NextRequest} from "next/server";
import {okData} from "@/model/common/response/response";


export async function GET(request:NextRequest) {
    return okData({}, '获取成功')
}