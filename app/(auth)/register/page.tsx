import Link from "next/link";
import {Button} from "antd";
import RegisterComponent from "@/app/(auth)/register/register";


export default function Page() {
    return (
        <div className={"flex flex-col"}>
            {/*<Login />*/}
            <RegisterComponent/>
            <Link href={"/login"}>
                <div className={"w-full flex justify-center"}>
                    <Button type={"link"}>
                        Sign In Account
                    </Button>
                </div>
            </Link>
        </div>
    )
}