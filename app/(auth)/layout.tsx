import {AntdRegistry} from "@ant-design/nextjs-registry";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen w-screen bg-primary justify-center items-center">
            <div className={"bg-white rounded-md lg:p-10 md:p-6 sm:p-4 lg:w-1/4 sm:m-10 sm:w-full md:w-1/3 md:min-w-96 transition-all delay-100 flex-col justify-center items-center"}>
                <div className={"flex justify-center items-end gap-1 mt-5"}>
                    <img src="/database-fill.svg" className={"w-6 h-6"}  alt={"logo"}/>
                    <span className={"text-sm font-bold"}>Next Admin</span>
                </div>

                {/*<span className={"text-2xl font-bold text-blue-500 mt-10 flex justify-center items-center"}>*/}
                {/*    Hi, Welcome Back*/}
                {/*</span>*/}

                <div className={"w-full flex justify-center items-center mt-12"}>
                    <AntdRegistry>
                    {children}
                    </AntdRegistry>
                </div>
            </div>
        </div>
    );
}