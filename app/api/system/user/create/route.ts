import {NextRequest} from "next/server";
import {okMsg} from "@/model/common/response/response";

export async function POST(request: NextRequest) {
    return okMsg('创建成功')
}