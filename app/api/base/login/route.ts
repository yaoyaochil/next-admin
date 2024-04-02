// import { NextRequest } from "next/server";
// import { AuthOA, failMsg } from "@/model/common/response/response";
// import { UserEntity } from "@/model/entity/system/user.entity";
// import { decrypt } from "@/utils/bcrypt";
// import { createJwt } from "@/utils/jwt";
// import { role, systemUser } from "@/model/system/user";
// import {createDataSource} from "@/lib/db";
//
// /**
//  * 登录
//  * @param req
//  */
//
// export async function POST(req: NextRequest) {
//   const { username, password } = await req.json();
//   if (!username || !password) {
//     return failMsg("参数错误");
//   }
//
//   const globalDataSource = await createDataSource();
//
//   const user = await globalDataSource.manager.findOne(UserEntity, {
//     where: {
//       username,
//     },
//     relations: ["roles", "roles.menus"],
//   });
//   if (!user) {
//     return failMsg("账户或密码错误");
//   }
//
//   if (!decrypt(user.password, password)) {
//     return failMsg("账户或密码错误");
//   }
//
//   // 创建token
//   const token = await createJwt({
//     uuid: user.uuid,
//     username: user.username,
//     roleId: user.roleId,
//   });
//
//   return AuthOA(token, {
//     id: user.id,
//     username: user.username,
//     nickname: user.nickname,
//     email: user.email,
//     mobile: user.mobile,
//     avatar: user.avatar,
//     status: user.status,
//     roleId: user.roleId,
//     // @ts-ignore
//     roles: user.roles.map((role: role) => {
//       return {
//         id: role.id,
//         createdAt: role.createdAt,
//         updatedAt: role.updatedAt,
//         deletedAt: role.deletedAt,
//         name: role.name,
//         description: role.description,
//         menus: role.menus.map((menu) => {
//           return {
//             id: menu.id,
//             createdAt: menu.createdAt,
//             updatedAt: menu.updatedAt,
//             deletedAt: menu.deletedAt,
//             name: menu.name,
//             path: menu.path,
//             icon: menu.icon,
//             parentId: menu.parentId,
//             sort: menu.sort,
//             type: menu.type,
//           };
//         }),
//       };
//     }),
//   } as systemUser);
// }
