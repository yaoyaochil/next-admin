import {NextRequest} from "next/server";
import {failMsg, okMsg} from "@/model/common/response/response";
import {MenuEntity, RoleEntity} from "@/model/entity/system/auth.entity";
import {z} from "zod";
import {createDataSource} from "@/lib/db";


const RoleSchema = z.object({
    name: z.string(),
    description: z.string(),
    defaultPage: z.string()
})

export async function POST(request: NextRequest) {
    const data = await request.json();

    // check fields
    if (!RoleSchema.safeParse(data).success) {
        return failMsg('参数错误')
    }

    const globalDataSource = await createDataSource();
    const isExist = await globalDataSource.manager.findOne(RoleEntity, {
        where: {
            name: data.name
        }
    })

    if (isExist) {
        return failMsg('角色已存在')
    }

    try {
        // 保存菜单到数据库 save menu to database
        await globalDataSource.manager.save(RoleEntity, {
            ...data
        });
    } catch (error) {
        return failMsg('创建失败')
    }

    return okMsg("创建成功")
}