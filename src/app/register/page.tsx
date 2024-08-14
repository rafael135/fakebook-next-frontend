"use client"

import TextInput from "@/components/Atoms/TextInput";
import styles from "./Register.module.scss";
import Form from "@/components/Atoms/Form";
import { useState } from "react";

import yup from "yup";


const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    
    

    const handleRegister = () => {

    }

    return(
        <div className={`${styles.registerPage}`}>
            <Form onSubmit={handleRegister}>
                <TextInput
                    name="name"
                    value={name}
                    setValue={setName}
                    type="text"
                    label="Nome"
                />
            </Form>
        </div>
    );
}

export default Register;