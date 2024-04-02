import {BaseEntity} from "@/global/model/common";
import {Column, Entity, ManyToMany} from "typeorm";
import {RoleEntity} from "@/model/entity/system/auth.entity";

@Entity({name: 'sys_user'})
export class UserEntity extends BaseEntity {
    @Column({unique: true, comment: '用户名'})
    username!: string;

    @Column({comment: '昵称'})
    nickname!: string;

    @Column({comment: '密码'})
    password!: string;

    @Column({unique: true})
    email!: string;

    @Column({comment: '手机号'})
    mobile!: string;

    @Column({default: 'https://api.dicebear.com/7.x/miniavs/svg?seed=13', comment: '头像'})
    avatar!: string;

    @Column({default: 0, comment: '0: 正常, 1: 禁用'})
    status!: number;

    @Column({comment: '当前角色id'})
    roleId!: string;

    @ManyToMany(() => RoleEntity, role => role.users)
    roles!: RoleEntity[]
}