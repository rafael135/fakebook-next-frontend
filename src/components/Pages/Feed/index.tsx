"use client"

import { UserContext } from "@/contexts/UserContext";
import { useContext } from "react";
import styles from "./Feed.module.scss";
import FastPost from "./Components/FastPost";
import Post from "../../Molecules/Post";
import { UserType } from "@/types/User";
import Col from "@/components/Molecules/Col";




const Feed = () => {

    const testUser: UserType = {
        uuid: "sdasda-dasdasd-dasdsad",
        name: "Test",
        email: "test@gmail.com",
        avatar: "/img/profile-picture-5.jpg",
        friends: [],
        phone: "(19) 98917-7880"
    }

    const usrContext = useContext(UserContext)!;

    return(
        <div className={`${styles.feed}`}>
            <Col>
                <FastPost />

            
                <Post
                    post={{
                        author: testUser,
                        body: "Texto para testar o post de teste",
                        createdAt: "2024-22-09",
                        updatedAt: "2024-22-09",
                        dislikes: 0,
                        likes: 0,
                        uuid: "27388181-23823783-283823"
                    }}
                    key={1}
                />
            </Col>
        </div>
    );
}


export default Feed;