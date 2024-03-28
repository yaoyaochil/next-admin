import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {AntdRegistry} from '@ant-design/nextjs-registry';
import {ConfigProvider} from "antd";
import {ThemeConfig} from "antd/es/config-provider/context";

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


    const theme:ThemeConfig = {
        components: {
            Menu: {
                itemBg: "#376fd0",
                itemBorderRadius: 0,
                subMenuItemBorderRadius: 0,
                itemMarginBlock: 0,
                itemColor: "rgba(255, 255, 255, 0.7)",
                itemHoverColor: "#ffffff",
                itemSelectedColor: "#ffffff",
                colorItemBgSelected: "#2f65cb",
                itemActiveBg: "#2f65cb",
            }
        }
    }

    return (
        <html lang="zh">
        <body className={inter.className}>
        <AntdRegistry>
            <ConfigProvider theme={theme}>
            {children}
            </ConfigProvider>
        </AntdRegistry>
        </body>
        </html>
    );
}
