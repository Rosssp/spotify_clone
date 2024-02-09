import styles from "./box.module.scss";
import cn from "classnames";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
    return <div className={cn(styles.wrapper, className)}>{children}</div>;
};

export default Box;
