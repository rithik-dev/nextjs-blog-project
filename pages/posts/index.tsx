// noinspection JSUnusedGlobalSymbols

import AllPosts from "../../components/posts/all-posts/all-posts";
import IPost from "../../interfaces/post";
import {GetStaticProps} from "next";
import {getAllPosts} from "../../utils/posts-util";
import React from "react";
import Head from "next/head";

type Props = {
    allPosts: Array<IPost>;
}

const AllPostsPage: React.FC<Props> = ({allPosts}) => (
    <>
        <Head>
            <title>All Posts</title>
            <meta name={'description'} content={'A list of all programming related content.'}/>
        </Head>
        <AllPosts posts={allPosts}/>
    </>
)

export const getStaticProps: GetStaticProps<Props> = () => {
    const allPosts = getAllPosts();
    return {props: {allPosts}};
}

export default AllPostsPage;
