'use client'
import {Typography} from "@mui/material";
import {Button} from "antd";
import {useRouter} from "next/navigation";


export default function NotFound() {

    const navigate = useRouter()


    return (
        <div className={"flex flex-col justify-center items-center h-screen w-screen"}>
            <div className={"flex flex-col justify-center items-center"}>
                <Typography variant="h3" className={"text-center mt-20"}>
                    404
                </Typography>
                <Typography variant="h6">
                    Page not found
                </Typography>
                <Typography variant="body2" gutterBottom>
                    The page you are looking for might have been removed.
                </Typography>
                <Button className={"mt-5"} type={"primary"} onClick={() => {navigate.push("/admin/dashboard")}}>Return to website</Button>
            </div>
        </div>
    )
}