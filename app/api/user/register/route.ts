import {NextRequest} from "next/server";
import {failMsg, okMsg} from "@/model/common/response/response";
import {globalDataSource} from "@/lib/db";
import {UserEntity} from "@/model/entity/system/user.entity";
import {encrypt} from "@/utils/bcrypt";
import {RoleEntity} from "@/model/entity/system/auth.entity";



export async function POST(request: NextRequest) {
    const {username, password, email, mobile, avatar, status} = await request.json();

    if (!username || !password || !email || !mobile) {
        return failMsg('参数错误')
    }

    // 获取角色
    const role = await globalDataSource.manager.findOne(RoleEntity, {where: {id: 1}})
    if (!role) {
        return failMsg('注册失败, 需要的角色不存在')
    }


    // 先查询是否存在 username 或 email 是否已经存在
    const existUser = await globalDataSource.manager.findOne(UserEntity, {
        where: [
            {username},
            {email}
        ]
    })
    if (existUser) {
        return failMsg('用户名或邮箱已存在')
    }



    // 保存用户到数据库 save user to database
    try {
        await globalDataSource.manager.save(UserEntity, {
            username,
            password: encrypt(password),
            email,
            mobile,
            avatar,
            status,
            roleId: 1,
            roles: [role] // 用户拥有的角色
        });
        return okMsg('注册成功');
    } catch (error) {
        console.error(error)
        return failMsg('注册失败')
    }
}