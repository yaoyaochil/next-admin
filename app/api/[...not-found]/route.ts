import {NextRequest} from "next/server";
import {failMsg} from "@/model/common/response/response";


export async function GET(request: NextRequest) {
    return failMsg("Not Found");
}

export async function POST(request: NextRequest) {
    return failMsg("Not Found");
}