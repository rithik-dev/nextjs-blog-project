import styles from './post-content.module.css';
import PostHeader from "../post-header/post-header";
import IPost from "../../../../interfaces/post";
import {getPostImagePath} from "../../../../utils/helper";
import ReactMarkdown from "react-markdown";
import React from "react";

type Props = {
    post: IPost;
}

const PostContent: React.FC<Props> = ({post}) => {
    const imageSrc = getPostImagePath(post);

    return (
        <>
            <article className={styles.content}>
                <PostHeader title={post.title} imageSrc={imageSrc}/>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
        </>
    )
}

export default PostContent;
