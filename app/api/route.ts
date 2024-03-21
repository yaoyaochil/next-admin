import {NextRequest, NextResponse} from "next/server";
import {ok, okMsg} from "@/model/common/response/response";



export async function GET(request: NextRequest) {
    return okMsg('Hello World')
}