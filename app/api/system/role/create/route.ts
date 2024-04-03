import {NextRequest} from "next/server";
import {failMsg, okMsg} from "@/model/common/response/response";
import {RoleEntity} from "@/model/entity/system/auth.entity";
import {z} from "zod";
import {globalDB} from "@/database/connections";


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
    const db = await globalDB()
    const isExist = await db.manager.findOne(RoleEntity, {
        where: {
            name: data.name
        }
    })

    if (isExist) {
        return failMsg('角色已存在')
    }

    try {
        // 保存菜单到数据库 save menu to database
        await db.manager.save(RoleEntity, {
            ...data
        });
    } catch (error) {
        return failMsg('创建失败')
    }

    return okMsg("创建成功")
}