import {NextRequest} from "next/server";
import {AuthOA, failMsg} from "@/model/common/response/response";
import {globalDataSource} from "@/lib/db";
import {UserEntity} from "@/model/entity/system/user.entity";
import {decrypt} from "@/utils/bcrypt";
import {createJwt} from "@/utils/jwt";
import {systemUser} from "@/model/system/user";



/**
 * 登录
 * @param req
 */

export async function POST(req: NextRequest) {
    const {username, password} = await req.json()
    if (!username || !password) {
        return failMsg('参数错误')
    }

    const user = await globalDataSource.manager.findOne(UserEntity, {
        where: {
            username
        }
    })
    if (!user) {
        return failMsg('账户或密码错误')
    }

    if (!decrypt(user.password, password)) {
        return failMsg('账户或密码错误')
    }

    // 创建token
    const token = await createJwt({
        id: user.id,
        username: user.username,
        roleId: user.roleId,
    })

    return AuthOA(token, {
        id: user.id,
        username: user.username,
        nickname: user.nickname,
        avatar: user.avatar,
        email: user.email,
        mobile: user.mobile,
        roleId: user.roleId,
        status: user.status
    } as systemUser)
}