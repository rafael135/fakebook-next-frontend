"use client"

import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";
import styles from "./Feed.module.scss";
import FastPost from "./Components/FastPost";




const Feed = () => {

    const usrContext = useContext(UserContext)!;

    return(
        <div className={`${styles.feed}`}>
            <FastPost />

            
        </div>
    );
}


export default Feed;