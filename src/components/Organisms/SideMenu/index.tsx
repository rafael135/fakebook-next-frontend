"use client"

import { useContext } from "react";
import styles from "./SideMenu.module.scss";
import { MenuContext } from "@/contexts/MenuContext";


const SideMenu = () => {
    const menuCtx = useContext(MenuContext)!;

    return(
        <aside
            className={`${styles.sideMenu}`}
            style={{
                borderWidth: (menuCtx.showSideMenu) ? "1px" : "0"
            }}
        >
            <nav>
                
            </nav>
        </aside>
    );
}


export default SideMenu;