import {NextRequest} from "next/server";
import {UserEntity} from "@/model/entity/system/user.entity";
import {failMsg, okData} from "@/model/common/response/response";
import {globalDB} from "@/database/connections";


export async function POST(request: NextRequest) {
    const {id} = await request.json();

    const db = await globalDB()
    const user = await db.manager.findOne(UserEntity, {
        where: {
            id: id
        },
        relations: ['roles', 'roles.menus', 'roles.apis']
    });

    if (!user) {
        return failMsg("用户不存在");
    }

    return okData(user, "查询成功")
}