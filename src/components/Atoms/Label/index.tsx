import React, { ReactNode } from "react";
import styles from "./Label.module.scss";

type props = {
    title?: string;
    children: ReactNode;
    forInput?: string;
}

const LabelComponent = ({ title, children, forInput }: props) => {
    return(
        <label
            title={title}
            htmlFor={forInput}
            className={styles.label}
        >
            {children}
        </label>
    )
}

const Label = React.memo(LabelComponent,
    (prev, next) => {
        return prev.children != next.children || prev.title != next.title;
    }
);

export default Label;