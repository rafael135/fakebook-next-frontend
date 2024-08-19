import styles from "./Post.module.scss";


type props = {
    className?: string;
}

const Post = ({ className }: props) => {


    return(
        <div className={`${styles.post} ${className ?? ""}`}>
            <div className={styles.head}>

            </div>

            <div className={styles.body}>

            </div>

            <div className={styles.footer}>

            </div>
        </div>
    );
}

export default Post;