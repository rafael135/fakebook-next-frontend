
import { ReactNode } from "react";
import styles from "./Navbar.module.scss";


type props = {
    children: ReactNode;
}

const Navbar = ({ children }: props) => {

    return(
        <header className={styles.navbar}>
            {children}
        </header>
    );
}


export default Navbar;