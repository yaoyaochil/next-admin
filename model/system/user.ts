import {globalResponse} from "@/model/common/response/response";


export interface menu {
    id: number
    createdAt: string
    updatedAt: string | null
    deletedAt: string | null
    name: string
    path: string
    icon: string
    parentId: number
    sort: number
    type: number
}

export interface role {
    id: number
    createdAt: string | null
    updatedAt: string | null
    deletedAt: string | null
    name: string
    description: string
    menus: menu[]
}

export interface systemUser extends globalResponse{
    id: number;
    username: string;
    password?: string;
    nickname: string;
    email: string;
    mobile: string;
    avatar: string;
    status: number;
    roleId: number;
    roles: role[]
}