'use client'
import {Button, Form, Input, type FormProps, message} from "antd";
import {useState} from "react";
import {useUserStore} from "@/store/useUserStore";
import { useRouter } from 'next/navigation'
type FormItem = {
    username: string;
    password: string;
}

export default function Login() {
    const setUserInfo = useUserStore(state => state.setUserInfo);
    const setToken = useUserStore(state => state.setToken);
    const [loading, setLoading] = useState(false);
    const navigate = useRouter();
    /**
     * 登录
     * @param values
     */
    const onFinish: FormProps<FormItem>['onFinish'] = async (values: FormItem) => {
        setLoading(true);
        const {username, password} = values;
        const res = await fetch("/api/base/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username, password})
        });
        const data = await res.json();
        if (data.code === 0) {
            message.success(data.msg);
            setUserInfo(data.data.userInfo);
            setToken(data.data.token);
            setLoading(false);
            navigate.push("/admin/dashboard");
        } else {
            message.error(data.msg);
            setLoading(false);
        }
    }

    return (
        <div className={"w-full"}>
            <Form labelCol={{span: 8}} onFinish={onFinish}>
                <Form.Item<FormItem> name={"username"} rules={
                    [
                        {
                            required: true,
                            message: "Please input your username"
                        }
                    ]
                }>
                    <Input placeholder={"Account"} />
                </Form.Item>
                <Form.Item<FormItem> name={"password"} rules={
                    [
                        {
                            required: true,
                            message: "Please input your password"
                        }
                    ]
                }>
                    <Input.Password placeholder={"password"} />
                </Form.Item>
                <Form.Item labelCol={{offset: 8}}>
                    <Button className={"w-full"} type="primary" htmlType="submit" loading={loading}>Login</Button>
                </Form.Item>
            </Form>
        </div>
    );
}