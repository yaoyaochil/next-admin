import UserCardComponent from "@/components/userCard/user_card";
import type {Metadata} from "next";
import MenuComponent from "@/components/Menu/Menu";
import HeaderComponent from "@/components/Header/Header";
import LogoIcon from "@/components/Icon/LogoIcon";


export const metadata: Metadata = {
    title: "后台管理系统",
    description: "NextAdmin",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className={"flex w-screen h-screen min-h-full"}>
          {/*侧边栏*/}
          <div className={"lg:w-sidebar sm:w-0 bg-sidebar h-full flex flex-col text-white overflow-hidden"}>
              <div className={"bg-sidebar-item h-16 w-full flex justify-center items-center"}>
                    <div className={"flex justify-center items-end gap-1"}>
                        <LogoIcon className={"text-white w-6 h-6"}/>
                        <span className={"text-sm font-bold"}>NextAdmin</span>
                    </div>
              </div>
              <div className={"flex-1 w-full overflow-y-auto"}>
                  <div className={"h-full w-full"}>
                      <MenuComponent />
                  </div>
              </div>
              <div className={"w-full bg-sidebar-item h-16 mt-auto"}>
                  {/*用户卡片*/}
                  <UserCardComponent />
              </div>
          </div>
          <div className={"flex-1 h-screen flex flex-col bg-content"}>
              <div className={"h-16 w-full bg-white"}>
                  <HeaderComponent/>
              </div>
              <div className={"h-full w-full overflow-scroll scroll-smooth"}>
                  <div className={"h-screen w-full flex flex-col"}>
                      <div className={"p-4 flex-1"}>
                          {children}
                      </div>
                      <div className={"bg-footer flex justify-center items-center mt-auto h-16 text-footer-text"}>
                          create by Tim 2024 © All Rights Reserved
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}