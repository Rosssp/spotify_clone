"use client";

import styles from "./sidebar.module.scss";
import cn from "classnames";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "../Box/Box";
import SidebarItem from "../SidebarItem/SidebarItem";

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const pathname = usePathname();
    const routes = useMemo(
        () => [
            {
                icon: HiHome,
                label: "Home",
                active: pathname !== "/search",
                href: "/",
            },
            {
                icon: BiSearch,
                label: "Search",
                active: pathname === "/search",
                href: "/search",
            },
        ],
        [pathname]
    );
    return (
        <div className={styles.wrapper}>
            <div className={styles.aside}>
                <Box>
                    <div className={styles.box}>
                        {routes.map((item) => (
                            <SidebarItem
                                key={item.label}
                                {...item}
                            ></SidebarItem>
                        ))}
                    </div>
                </Box>
                <Box className={cn(styles.library, styles.box)}>Библиотека</Box>
            </div>
            <main className={styles.main}>{children}</main>
        </div>
    );
};
export default Sidebar;
