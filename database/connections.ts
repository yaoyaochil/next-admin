import {DataSource, DataSourceOptions} from "typeorm";
import {ApiEntity, MenuEntity, RoleEntity} from "@/model/entity/system/auth.entity";
import {UserEntity} from "@/model/entity/system/user.entity";


const config: DataSourceOptions = {
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
}

let mysqlConnection: DataSource | null = null
export const globalDB = async ():Promise<DataSource> => {
    try {
        if (!mysqlConnection) {
            mysqlConnection = new DataSource(config)
        }

        if (!mysqlConnection.isInitialized) {
            await mysqlConnection.initialize()
        }
    } catch (e) {
        console.error(e)
    }

    return mysqlConnection as DataSource
}