import {DataSource} from "typeorm";
import {UserEntity} from "@/model/entity/system/user.entity";
import {ApiEntity, MenuEntity, RoleEntity} from "@/model/entity/system/auth.entity";
export const globalDataSource = new DataSource({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : '',
    database: process.env.DATABASE_NAME,
    synchronize: true,
    logging: false,
    entities: [
        UserEntity,
        RoleEntity,
        MenuEntity,
        ApiEntity
    ]
})
await globalDataSource.initialize();