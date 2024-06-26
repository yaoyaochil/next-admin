'use client'

import {Avatar, Badge, styled} from "@mui/material";
import {useUserStore} from "@/store/useUserStore";
import {LoadingOutlined, SettingOutlined} from "@ant-design/icons";
import {useEffect} from "react";
import {systemUser} from "@/model/system/user";
import {getSession} from "next-auth/react";
import {Spin} from "antd";


const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
const session = getSession()
const UserCardComponent = () => {
    const userInfo = useUserStore((state) => state.userInfo);

    const getUserInfo = async () => {
        const userSession = await session

        if (userSession) {
            const userInfo = await fetch(`/api/system/user/getUserInfoById`, {
                method: 'POST',
                body: JSON.stringify({id: userSession.user?.id}),
            })
            const data = await userInfo.json()
            useUserStore.setState({userInfo: data.data as systemUser})
        }

        return null
    }

    useEffect(() => {
        getUserInfo()
    },[])

    return (
        <div className={"flex justify-start items-center gap-3 h-full ml-3"}>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                variant="dot"
            >
                <Avatar className={"sm:w-0 lg:w-10"} alt={"user_avatar"} src={userInfo.avatar}/>
            </StyledBadge>
            <div className={"font-light mt-1"}>
                <div
                    className={"text-user-name leading-user-name"}>
                    {userInfo.nickname ? userInfo.nickname :
                        <Spin indicator={<LoadingOutlined style={{fontSize: 24,color: "#fff"}} spin />} />
                    }</div>
                <div className={"text-user-role leading-user-role"}>{userInfo.email}</div>
            </div>
            <span
                className={"ml-auto mr-6 rounded-full h-8 w-8 hover:bg-sidebar-item-hover active:scale-90 flex justify-center items-center cursor-pointer transition-colors delay-100"}>
                <SettingOutlined/>
            </span>
        </div>
    );
}

export default UserCardComponent;