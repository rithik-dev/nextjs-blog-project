import IPost from "../../../interfaces/post";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './post-card.module.css';
import {formatDate} from "../../../utils/helper";

type Props = {
    post: IPost;
}

const PostCard: React.FC<Props> = ({post}) => {

    const displayDate = formatDate(post.date);

    const imageSrc = `/images/posts/${post.slug}/${post.image}`;

    const linkSrc = `/posts/${post.slug}`;

    return (
        <li className={styles.post}>
            <Link href={linkSrc}>
                <a>
                    <div className={styles.image}>
                        <Image src={imageSrc} alt={post.title} width={300} height={200} layout={"responsive"}/>
                    </div>
                    <div className={styles.content}>
                        <h3>{post.title}</h3>
                        <time>{displayDate}</time>
                        <p>{post.excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    )
}

export default PostCard;
