import {UserEntity} from "@/model/entity/system/user.entity";
import {globalDB} from "@/database/connections";


export const getUserInfoById = async (id: string) => {
    const db = await globalDB()
    try {
        return await db.getRepository(UserEntity).findOne({
            where: {
                id: id
            },
            relations: ['roles', 'roles.menus', 'roles.apis']
        })
    } catch (e) {
        throw new Error('获取用户信息失败')
    }
}
export const getUserInfoByUsername = async (username: string) => {
    const db = await globalDB()
    try {
        return await db.manager.findOne(UserEntity, {
            where: {
                username: username
            },
            relations: ['roles', 'roles.menus', 'roles.apis']
        })
    } catch (e) {
        console.log(e)
        throw new Error('获取用户信息失败')
    }
}