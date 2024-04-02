'use client'

import {Button, Form, FormProps, Input, message} from "antd";
import {loginWithCredentials} from "@/lib/actions";

type FormItem = {
    username: string;
    password: string;
}

export default function LoginComponent() {


    const onFinish: FormProps<FormItem>['onFinish'] = async (values) => {
        const res = await loginWithCredentials({username: values.username, password: values.password})
        if (res && res.error) {
            await message.error(res.error)
            return
        }
        await message.success('登录成功')
    }

    return (
        <div>
            <Form onFinish={onFinish}>
                <Form.Item<FormItem> name={"username"}>
                    <Input placeholder={"Account"} />
                </Form.Item>
                <Form.Item<FormItem> name={"password"}>
                    <Input.Password placeholder={"Password"} />
                </Form.Item>
                <Form.Item<FormItem>>
                    <Button className={"w-full"} htmlType={"submit"} type={"primary"}>Login</Button>
                </Form.Item>
            </Form>
        </div>
    )
}