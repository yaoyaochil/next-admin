import {NextRequest} from "next/server";
import {UserEntity} from "@/model/entity/system/user.entity";
import {okData} from "@/model/common/response/response";
import {globalDB} from "@/database/connections";


export async function GET(request: NextRequest) {
    // 获取cookie
    const user_id = request.cookies.get('user_id');
    const db = await globalDB()
    const user = await db.manager.findOne(UserEntity, {
        where: {id: user_id as unknown as string},
        // 关联查询
        relations: ['roles', 'roles.menus']
    });

    return okData({userInfo: user}, '获取成功')
}