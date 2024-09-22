import { ReactNode } from "react";
import styles from "./Col.module.scss";

const Col = ({ children, className }: { children: ReactNode, className?: string }) => {


    return(
        <div className={`${styles.col} ${className ?? ""}`}>
            {children}
        </div>
    )
}

export default Col;