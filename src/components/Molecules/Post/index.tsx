import styles from "./Post.module.scss";
import Col from "../Col"
import Row from "../Row";
import Image from "next/image";
import { PostType } from "@/types/Post";
import ButtonWidget from "@/components/Pages/Feed/Components/ButtonWidget";
import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";
import { IoShareSocial } from "react-icons/io5";


type props = {
    className?: string;
    post: PostType;
}

const Post = ({ className, post }: props) => {

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
                        onClick={handleLikeClick}
                        title="Like"
                    >
                        <AiOutlineLike className="h-6 w-6" />
                    </ButtonWidget>



                    <ButtonWidget
                        onClick={handleDislikeClick}
                        className={styles.dislikeButton}
                        title="Dislike"
                    >
                        <AiOutlineDislike className="h-6 w-6" />
                    </ButtonWidget>



                    <ButtonWidget
                        onClick={handleDislikeClick}
                        className={styles.shareButton}
                        title="Dislike"
                    >
                        <IoShareSocial className="h-6 w-6" />
                    </ButtonWidget>

                </div>
            </div>
        </div>
    );
}

export default Post;