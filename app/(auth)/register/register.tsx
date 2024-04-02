'use client'
import {Button, Form, Input} from "antd";
import FormItem from "antd/es/form/FormItem";

export default function RegisterComponent() {
    return (
        <div>
            <Form>
                <FormItem>
                    <Input placeholder={"Email"} />
                </FormItem>
                <FormItem>
                    <Input placeholder={"Account"} />
                </FormItem>
                <FormItem>
                    <Input.Password placeholder={"Password"} />
                </FormItem>
                <FormItem>
                    <Input.Password placeholder={"Confirm Password"} />
                </FormItem>
                <FormItem>
                    <Button type={"primary"} className={"w-full"}>注册账号</Button>
                </FormItem>
            </Form>
        </div>
    );
}