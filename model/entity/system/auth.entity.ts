import {Column, Entity, JoinTable, ManyToMany} from "typeorm";
import {BaseEntity} from "@/global/model/common";
import {UserEntity} from "@/model/entity/system/user.entity";

/**
 * 角色表 sys_role
 */
@Entity('system_role')
export class RoleEntity extends BaseEntity {
    @Column({comment: '角色名称'})
    name!: string

    @Column({comment: '角色描述'})
    description!: string

    @Column({comment: '默认页面'})
    defaultPage!: string

    @ManyToMany(() => UserEntity, user => user.roles)
    @JoinTable({
        name: 'sys_user_role',
        joinColumn: {
            name: 'role_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        }
    })
    users!: UserEntity[]

    @ManyToMany(() => MenuEntity, menu => menu.roles)
    @JoinTable({
        name: 'sys_role_menu',
        joinColumn: {
            name: 'role_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'menu_id',
            referencedColumnName: 'id'
        }
    })
    menus!: MenuEntity[]

    @ManyToMany(() => ApiEntity, api => api.roles)
    @JoinTable({
        name: 'sys_role_api',
        joinColumn: {
            name: 'role_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'api_id',
            referencedColumnName: 'id'
        }
    })
    apis!: ApiEntity[]
}


/**
 * 菜单表 sys_menu
 */
@Entity('system_menu')
export class MenuEntity extends BaseEntity {
    @Column({comment: '菜单名称'})
    name!: string

    @Column({comment: '菜单路径', unique: true})
    path!: string

    @Column({comment: '菜单图标'})
    icon!: string

    @Column({comment: '父级菜单id'})
    parentId!: number

    @Column({comment: '菜单排序'})
    sort!: number

    @Column({comment: '菜单类型'})
    type!: number

    @ManyToMany(() => RoleEntity, role => role.menus)
    roles!: RoleEntity[]
}


/**
 * api表 sys_api
 */
@Entity('system_api')
export class ApiEntity extends BaseEntity {
    @Column({comment: 'api名称'})
    path!: string

    @Column({comment: 'api描述'})
    description!: string

    @Column({comment: 'api组'})
    api_group!: string

    @Column({comment: '方法'})
    method!: string

    @ManyToMany(() => RoleEntity, role => role.apis)
    roles!: RoleEntity[]
}
