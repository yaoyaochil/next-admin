import {NextRequest} from "next/server";
import {getUserInfoByUsername} from "@/service/system/sysUserService";
import {failMsg, okData} from "@/model/common/response/response";


export async function POST(request: NextRequest) {
    const {username} = await request.json();

    const user = await getUserInfoByUsername(username);

    if (!user) {
        return failMsg("用户不存在");
    }

    return okData(user, "查询成功")
}