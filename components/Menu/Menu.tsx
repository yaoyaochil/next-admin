'use client'
import {Typography} from "@mui/material";
import React, {useEffect} from "react";
import {Menu} from "antd";
import type { MenuProps } from 'antd';
import {DashboardOutlined, DashOutlined, UserOutlined} from "@ant-design/icons";
import SettingIcon from "@/components/Icon/SettingIcon";
import ChartIcon from "@/components/Icon/ChartIcon";
import AuthIcon from "@/components/Icon/AuthIcon";
const MenuComponent = () => {

    const Items:MenuProps['items'] = [
        {
            key: "1",
            label: "Dashboard",
            icon: <ChartIcon />,
            children: [
                {
                    key: "1-1",
                    label: "分析页",
                    icon: <DashOutlined />
                },
                {
                    key: "1-2",
                    label: "监控页",
                    icon: <DashOutlined />
                },
                {
                    key: "1-3",
                    label: "工作台",
                    icon: <DashOutlined />
                }
            ]
        },
        {
            key: "2",
            label: "系统管理",
            icon: <SettingIcon />,
            children: [
                {
                    key: "2-1",
                    label: "用户管理",
                    icon: <UserOutlined />
                },
                {
                    key: "2-2",
                    label: "角色管理",
                    icon: <AuthIcon />
                },
                {
                    key: "2-3",
                    label: "权限管理",
                    icon: <AuthIcon />
                }
            ]
        }
    ]

    useEffect(() => {
    },[])

    return (
        <div className={"w-full py-6 overflow-scroll"}>
            <Typography variant="caption" className={"pt-4 pb-1 px-7 opacity-40"}>
                PAGES
            </Typography>
            <Menu mode={"inline"} items={Items} defaultSelectedKeys={['1-1']} defaultOpenKeys={['1']} />
        </div>
    )
}

export default MenuComponent;