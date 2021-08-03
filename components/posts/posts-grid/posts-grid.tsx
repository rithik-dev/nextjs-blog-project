import React from "react";
import IPost from "../../../interfaces/post";
import PostCard from "../post-card/post-card";
import styles from './posts-grid.module.css';

type Props = {
    posts: Array<IPost>;
}

const PostsGrid: React.FC<Props> = ({posts}) => (
    <>
        <ul className={styles.grid}>
            {posts.map(post => (<PostCard key={post.slug} post={post}/>))}
        </ul>
    </>
)

export default PostsGrid;
