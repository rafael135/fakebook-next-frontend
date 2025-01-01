import { ReactNode } from "react";
import styles from "./ButtonWidget.module.scss";


type props = {
    className?: string;
    children: ReactNode;
    type: "normal" | "ghost";
    disabled?: boolean;
    onClick: (() => void) | (() => Promise<void>);
    title?: string;
}

const ButtonWidget = ({ className, children, type, disabled, onClick, title }: props) => {


    return(
        <button
            className={`
                ${styles.buttonWidget} ${className ?? ""}
            `}
            disabled={disabled}
            onClick={onClick}
            title={title}
        >
            {children}
        </button>
    );
}

export default ButtonWidget;