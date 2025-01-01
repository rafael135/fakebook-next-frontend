"use client"

import React from "react";
import styles from "./Logo.module.scss";
import { useRouter } from "next/navigation";


const LogoComponent = () => {
    const router = useRouter();

    return(
        <h2 className={styles.navbarLogo} onClick={() => { router.push("/") }}>
            Fakebook
        </h2>
    )
}

const Logo = React.memo(LogoComponent);

export default Logo;