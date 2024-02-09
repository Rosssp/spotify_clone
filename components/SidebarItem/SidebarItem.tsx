import styles from "./sidebarItem.module.scss";
import Link from "next/link";
import { IconType } from "react-icons";
import cn from "classnames";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active: boolean;
    href: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
    icon: Icon,
    label,
    active,
    href,
}) => {
    return (
        <Link
            href={href}
            className={cn(styles.wrapper, styles[active ? "active" : ""])}
        >
            <Icon size={22} />
            <p>{label}</p>
        </Link>
    );
};

export default SidebarItem;
