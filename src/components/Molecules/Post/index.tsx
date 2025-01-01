import styles from "./Post.module.scss";
import Col from "../Col"
import Row from "../Row";
import Image from "next/image";
import { PostType } from "@/types/Post";
import ButtonWidget from "@/components/Pages/Feed/Components/ButtonWidget";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import React, { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import { IoShareSocial } from "react-icons/io5";
import { ThumbsUp, ThumbsDown, Share2 } from "lucide-react";
import Label from "@/components/Atoms/Label";


type props = {
    className?: string;
    post: PostType;
}

const PostComponent = ({ className, post }: props) => {

    const userCtx = useContext(UserContext)!;

    const handleLikeClick = () => {

    }

    const handleDislikeClick = () => {

    }

    return (
        <div className={`${styles.post} ${className ?? ""}`}>
            <div className={styles.head}>
                <Row>
                    <Image
                        src={post.author.avatar ?? ""}
                        loading="lazy"
                        alt="Foto de Perfil"
                        className={styles.authorAvatar}
                        width={56}
                        height={56}
                    />

                    <div className={styles.authorName}>
                        {post.author.name}
                    </div>
                </Row>
            </div>

            <div className={styles.body}>
                <div className={styles.bodyContent}>
                    {post.body}
                </div>
            </div>

            <div className={styles.footer}>
                <div className={styles.footerActions}>

                    <ButtonWidget
                        className={`${styles.likeButton}`}
                        type="ghost"
                        onClick={handleLikeClick}
                        title="Like"
                    >
                        
                        <ThumbsUp className="h-5 w-5" />
                        {post.likes}
                    </ButtonWidget>



                    <ButtonWidget
                        onClick={handleDislikeClick}
                        type="ghost"
                        className={styles.dislikeButton}
                        title="Dislike"
                    >
                        <ThumbsDown className="h-5 w-5" />
                        {post.dislikes}
                    </ButtonWidget>



                    <ButtonWidget
                        onClick={handleDislikeClick}
                        type="ghost"
                        className={styles.shareButton}
                        title="Dislike"
                    >
                        <Share2 className="h-5 w-5" />
                        Compartilhar
                    </ButtonWidget>

                </div>
            </div>
        </div>
    );
}

const Post = React.memo(PostComponent, (prevProps, nextProps) => {
    return prevProps.post.id != nextProps.post.id;
});

export default Post;