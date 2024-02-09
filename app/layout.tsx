import Sidebar from "@/components/Sidebar/Sidebar";
import "./globals.scss";
import { Unbounded } from "next/font/google";

const font = Unbounded({ subsets: ["latin"] });

export const metadata = {
    title: "Clone SPOTIFY",
    description: "BY ROSSSP",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <Sidebar>{children}</Sidebar>
            </body>
        </html>
    );
}
