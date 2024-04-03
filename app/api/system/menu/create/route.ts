import {NextRequest} from "next/server";
import {failMsg, okMsg} from "@/model/common/response/response";
import {MenuEntity} from "@/model/entity/system/auth.entity";
import {z} from "zod";
import {globalDB} from "@/database/connections";

type MenuData = {
    name: string,
    path: string,
    icon: string,
    parentId: number,
    sort: number,
    type: number
}

const MenuDataSchema = z.object({
    name: z.string(),
    path: z.string(),
    icon: z.string(),
    parentId: z.number(),
    sort: z.number(),
    type: z.number()
})

export async function POST(request: NextRequest) {
    const data = await request.json();
    const db = await globalDB()
    // check fields
    if (!MenuDataSchema.safeParse(data).success) {
        return failMsg('参数错误')
    }

    const isExist = await db.getRepository(MenuEntity).findOne({
        where: {
            path: data.path
        }
    })
    if (isExist) {
        return failMsg('菜单路径重复')
    }

    try {
        // 保存菜单到数据库 save menu to database
        await db.getRepository(MenuEntity).save(data)
    } catch (error) {
        console.error(error)
        return failMsg('创建失败')
    }

    return okMsg("创建成功")
}