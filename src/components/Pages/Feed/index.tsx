"use client"

import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";
import styles from "./Feed.module.scss";
import FastPost from "./Components/FastPost";
import Post from "../../Molecules/Post";
import { UserType } from "@/types/User";
import Col from "@/components/Molecules/Col";
import { usePosts } from "@/contexts/PostContext";




const Feed = () => {

    const postsCtx = usePosts();

    

    const usrContext = useContext(UserContext)!;

    return(
        <div className={`${styles.feed}`}>
            <Col>
                <FastPost />


                {postsCtx.posts.map((post) => (
                    <Post post={post} key={`${post.id}`} />
                ))}
            </Col>
        </div>
    );
}


export default Feed;