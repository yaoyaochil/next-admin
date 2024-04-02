import {NextRequest} from "next/server";
import {globalDataSource} from "@/lib/db";
import {UserEntity} from "@/model/entity/system/user.entity";
import {okData} from "@/model/common/response/response";


export async function GET(request: NextRequest) {
    // 获取cookie
    const user_id = request.cookies.get('user_id');

    const user = await globalDataSource.manager.findOne(UserEntity, {
        where: {uuid: user_id as unknown as string},
        // 关联查询
        relations: ['roles', 'roles.menus']
    });

    return okData({userInfo: user}, '获取成功')
}