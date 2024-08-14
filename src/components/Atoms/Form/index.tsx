import { FormEvent, ReactNode } from "react";
import styles from "./Form.module.scss"

type props = {
    className?: string;
    onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
    children: ReactNode;

}

const Form = ({ children, className, onSubmit }: props) => {




    return(
        <form
            className={`${styles.form} ${className ?? ""}`}
            onSubmit={onSubmit}
        >   
            {children}
        </form>
    );
}

export default Form;