"use client"

import { Error } from "@/types/Form";
import styles from "./TextInputMask.module.scss";
import Mask, { Props } from "react-input-mask";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    $error?: boolean;
}


const TextInputMask = styled(Mask)<InputProps, Props>`
    padding: 6px 14px;
    background-color: rgb(235, 235, 235);
    color: rgb(51, 65, 85);
    border: 1px solid rgba(75, 85, 99, 0.4);
    border-radius: 1.5rem;

    &:focus, &:active {
        outline: none;
    }

    &::placeholder {
        color: rgb(100, 116, 139);
    }
`;

export default TextInputMask;