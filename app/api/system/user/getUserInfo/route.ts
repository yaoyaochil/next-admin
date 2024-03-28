import {NextRequest} from "next/server";
import {globalDataSource} from "@/lib/db";
import {UserEntity} from "@/model/entity/system/user.entity";
import {okData} from "@/model/common/response/response";


export async function GET(request: NextRequest) {
    // 获取cookie
    const user_id = parseInt(<string>request.cookies.get('ID')?.value);

    const user = await globalDataSource.manager.findOne(UserEntity, {
        where: {id: user_id},
        // 关联查询
        relations: ['roles', 'roles.menus']
    });

    return okData({userInfo: user}, '获取成功')
}