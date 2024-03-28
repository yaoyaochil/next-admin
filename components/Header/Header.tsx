import PowerIcon from "@/components/Icon/PowerIcon";
import MenuIcon from "@/components/Icon/MenuIcon";
import {Breadcrumb} from "antd";
import {ItemType} from "antd/es/breadcrumb/Breadcrumb";


const HeaderComponent = () => {

    const items:ItemType[] = [
        {
            key: "1",
            title: "Home",
            path: "/admin"
        },
        {
            key: "2",
            title: "Dashboard",
            path: "/admin/dashboard"
        }
    ]

    return (
        <div className={"flex w-full h-16 items-center"}>
            <span
                className={"lg:opacity-0 sm:opacity-100 lg:w-0 lg:p-0 lg:m-0 ml-5 flex justify-center items-center rounded-xl hover:bg-gray-100 active:scale-110 p-3 cursor-pointer"}>
                <MenuIcon className={"text-footer-text text-lg"}/>
            </span>
            <div className={"lg:ml-5 sm:ml-0 lg:opacity-100 sm:opacity-0 lg:w-auto sm:w-0"}>
                <Breadcrumb items={items} />
            </div>
            <span
                className={"ml-auto mr-10 flex justify-center items-center rounded-full hover:bg-gray-100 active:scale-90 p-3 cursor-pointer"}>
                <PowerIcon className={"text-footer-text"}/>
            </span>
        </div>
    )
}

export default HeaderComponent;