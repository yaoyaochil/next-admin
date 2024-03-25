import {create} from "zustand";
import {createJSONStorage, persist} from "zustand/middleware";


// 用户信息
export type UserInfo = {
    id: number
    username: string
    nickname: string
    roleId: number
    avatar: string
    email: string
    mobile: string
    status: number
}

// 用户信息状态类型
export type UserStore = {
    // 用户信息
    userInfo: UserInfo;
    setUserInfo: (userInfo: UserInfo) => void;

    // token
    token: string;
    setToken: (token: string) => void;

    // 登录
    login: (username: string, password: string) => Promise<void>;

    // 注销
    logout: () => void;

    // 注册
    register: (username: string, password: string) => Promise<void>;
}


/**
 * 用户信息
 * @returns
 * 1. userInfo: 用户信息
 * 2. setUserInfo: 设置用户信息
 * 3. token: token
 * 4. setToken: 设置token
 * 5. login: 登录
 * 6. logout: 注销
 * 7. register: 注册
 * 8. 本地存储
 */
export const useUserStore = create(
    persist<UserStore>(
        (set) => ({
            userInfo: {
                id: 0,
                username: "",
                nickname: "",
                avatar: "",
                email: "",
                mobile: "",
                roleId: 0,
                status: 0
            },
            setUserInfo: (userInfo: UserInfo) => set({userInfo}),

            token: "",
            setToken: (token: string) => set({token}),

            login: async (username: string, password: string) => {
            },
            logout: () => {
            },
            register: async (username: string, password: string) => {
            },
        }),
        {
            name: "user-store", // 存储的键名
            storage: createJSONStorage(() => localStorage)
        }
    ))