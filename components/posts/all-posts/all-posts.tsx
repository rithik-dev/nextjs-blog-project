import PostsGrid from "../posts-grid/posts-grid";
import IPost from "../../../interfaces/post";
import React from "react";
import styles from './all-posts.module.css';

type Props = {
    posts: Array<IPost>;
}

const AllPosts: React.FC<Props> = ({posts}) => (
    <section className={styles.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={posts}/>
    </section>
)

export default AllPosts;
