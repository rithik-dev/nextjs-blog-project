import styles from './featured-posts.module.css';
import PostsGrid from "../../posts/posts-grid/posts-grid";
import React from "react";
import IPost from "../../../interfaces/post";

type Props = {
    posts: Array<IPost>;
}

const FeaturedPosts: React.FC<Props> = ({posts}) => (
    <section className={styles.latest}>
        <h2>Featured Posts</h2>
        <PostsGrid posts={posts}/>
    </section>
)


export default FeaturedPosts;
