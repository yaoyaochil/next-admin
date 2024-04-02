'use server'

import {createDataSource} from "@/lib/db";
import {UserEntity} from "@/model/entity/system/user.entity";


export const getUserInfoById = async (id: string) => {
    const globalDataSource = await createDataSource()
    try {
        const user = await globalDataSource.manager.findOne(UserEntity, {
            where: {
                id: id
            },
            relations: ['roles', 'roles.menus', 'roles.apis']
        })
        return user
    } catch (e) {
        throw new Error('获取用户信息失败')
    }
}

export const getUserInfoByUsername = async (username: string) => {
    const globalDataSource = await createDataSource()
    try {
        return await globalDataSource.manager.findOne(UserEntity, {
            where: {
                username: username
            },
            relations: ['roles', 'roles.menus', 'roles.apis']
        })
    } catch (e) {
        throw new Error('获取用户信息失败')
    }
}