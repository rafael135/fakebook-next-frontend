"use client"

import { Error } from "@/types/Form";
import styles from "./TextInput.module.scss";


type props = {
    className?: string;
    label?: string;
    placeholder?: string;
    name: string;
    onKeyDown?: ((e: React.KeyboardEvent) => void) | ((e: React.KeyboardEvent) => Promise<void>);
    error?: Error;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    type: "text" | "number" | "password" | "email";
};

const TextInput = ({ className, label, placeholder, name, onKeyDown, error, value, setValue, type }: props) => {


    return(
        <>
            {(label != undefined) &&
                <label className={`${styles.inputLabel}`} htmlFor={name}>{label}</label>
            }
            
            <input
                className={`${styles.input} ${className ?? ""} ${(error != undefined) ? styles.errored : ""}`}
                placeholder={placeholder}
                type={type}
                name={name}
                id={name}
                onKeyDown={onKeyDown}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            {(error != undefined) &&
                <span className={`${styles.errorLabel}`}>{error.msg}</span>
            }
        </>
    );
}

export default TextInput;