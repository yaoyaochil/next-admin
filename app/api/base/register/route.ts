import {NextRequest} from "next/server";
import {failMsg, okMsg} from "@/model/common/response/response";
import {UserEntity} from "@/model/entity/system/user.entity";
import {encrypt} from "@/utils/bcrypt";
import {RoleEntity} from "@/model/entity/system/auth.entity";
import {createDataSource} from "@/lib/db";



export async function POST(request: NextRequest) {
    const {username, password,nickname, email, mobile, avatar, status} = await request.json();

    if (!username || !password || !email || !mobile) {
        return failMsg('参数错误')
    }
    const globalDataSource = await createDataSource();
    // 获取角色
    const role = await globalDataSource.manager.findOne(RoleEntity, {where: {id: "ddb16f12-9f54-41bf-a9e5-d7dd625c36b6"}})
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
            nickname: nickname ? nickname:username,
            email,
            mobile,
            avatar,
            status,
            roleId: "b48fb085-b3a2-45cb-8aa4-65d2912b5b8c",
            roles: [role] // 用户拥有的角色
        });
        return okMsg('注册成功');
    } catch (error) {
        console.error(error)
        return failMsg('注册失败')
    }
}