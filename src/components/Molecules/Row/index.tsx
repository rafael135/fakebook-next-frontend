import { ReactNode } from "react";
import styles from "./Row.module.scss";


type props = {
    children: ReactNode;
    className?: string;
};

const Row = ({ children, className }: props) => {


    return(
        <div className={`${styles.row} ${className}`}>
            {children}
        </div>
    );
}


export default Row;