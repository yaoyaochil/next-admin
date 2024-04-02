import LoginComponent from "@/app/(auth)/login/login";
import Link from "next/link";
import {Button} from "antd";


export default function LoginPage() {

  return (
    <div className={"flex flex-col"}>
        {/*<Login />*/}
        <LoginComponent/>
        <Link href={"/register"}>
            <div className={"w-full flex justify-center"}>
                <Button type={"link"}>
                    Register Account
                </Button>
            </div>
        </Link>
    </div>
  );
}