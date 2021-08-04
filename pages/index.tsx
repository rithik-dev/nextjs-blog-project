// noinspection JSUnusedGlobalSymbols

import Hero from '../components/home-page/hero/hero';
import FeaturedPosts from "../components/home-page/featured-posts/featured-posts";
import {GetStaticProps} from "next";
import IPost from "../interfaces/post";
import React from "react";
import {getFeaturedPosts} from "../utils/posts-util";
import Head from "next/head";

type Props = {
    featuredPosts: Array<IPost>;
}

const HomePage: React.FC<Props> = ({featuredPosts}) => (
    <>
        <Head>
            <title>Welcome to my blog</title>
            <meta name={'description'} content={'I post about programming here on this blog.'}/>
        </Head>
        <Hero/>
        <FeaturedPosts posts={featuredPosts}/>
    </>
)

export const getStaticProps: GetStaticProps<Props> = () => {
    const featuredPosts = getFeaturedPosts();
    return {props: {featuredPosts}};
}

export default HomePage;
