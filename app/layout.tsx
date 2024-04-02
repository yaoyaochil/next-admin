import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {App, ConfigProvider} from "antd";
import {ThemeConfig} from "antd/es/config-provider/context";
import {SessionProvider} from "next-auth/react";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "NextAdmin",
    description: "NextAdmin",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    const theme: ThemeConfig = {
        components: {
            Menu: {
                itemBg: "#376fd0",
                itemBorderRadius: 0,
                subMenuItemBorderRadius: 0,
                itemMarginBlock: 0,
                itemColor: "rgba(255, 255, 255, 0.7)",
                itemHoverColor: "#ffffff",
                itemSelectedColor: "#ffffff",
                itemSelectedBg: "#2f65cb",
                itemActiveBg: "#2f65cb",
            }
        }
    }

    // 获取当前用户信息

    return (
        <html lang="zh">
        <body className={inter.className}>
        <AntdRegistry>

            <ConfigProvider theme={theme}>
                <App>
                    <SessionProvider>

                        {children}

                    </SessionProvider>
                </App>
            </ConfigProvider>
        </AntdRegistry>
        </body>
        </html>
    );
}
