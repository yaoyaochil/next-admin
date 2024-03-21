import {BaseEntity} from "@/global/model/common";
import {Column, Entity, ManyToMany} from "typeorm";
import {RoleEntity} from "@/model/entity/system/auth.entity";

@Entity({name: 'sys_user'})
export class UserEntity extends BaseEntity {
    @Column({unique: true})
    username!: string;

    @Column()
    password!: string;

    @Column({unique: true})
    email!: string;

    @Column()
    mobile!: string;

    @Column()
    avatar!: string;

    @Column()
    status!: number;

    @Column()
    roleId!: number;

    @ManyToMany(() => RoleEntity, role => role.users)
    roles!: RoleEntity[]
}