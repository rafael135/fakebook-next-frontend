import { ReactNode } from "react";
import styles from "./NavbarItem.module.scss";


type props = {
    children: ReactNode;
};

const NavbarItem = ({ children }: props) => {


    return(
        <div className={styles.navbarItem}>
            {children}
        </div>
    );
}


export default NavbarItem;