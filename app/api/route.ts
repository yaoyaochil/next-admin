import {NextRequest, NextResponse} from "next/server";
import {ok, okData} from "@/model/common/response/response";



export async function GET(request: NextRequest) {
    return okData({
        name: '王画画'
    }, 'GET')
}