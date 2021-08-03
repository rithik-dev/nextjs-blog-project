// noinspection JSUnusedGlobalSymbols

import PostContent from "../../components/posts/post-detail/post-content/post-content";
import {GetStaticPaths, GetStaticProps} from "next";
import {getPostData, getPostFiles} from "../../utils/posts-util";
import React from "react";
import IPost from "../../interfaces/post";
import {removeFileExtension} from "../../utils/helper";

type Props = {
    postData: IPost;
}

const PostDetailsPage: React.FC<Props> = ({postData}) => (
    <PostContent post={postData}/>
)

export const getStaticProps: GetStaticProps<Props> = (context) => {
    const slug = context.params!.slug as string;

    const postData = getPostData(slug);
    return {props: {postData}, revalidate: 600};
}

export const getStaticPaths: GetStaticPaths = () => {
    const postFileNames = getPostFiles();
    const slugs = postFileNames.map(postFileName => removeFileExtension(postFileName))

    return {
        paths: slugs.map(slug => ({params: {slug}})),
        fallback: false,
    }
}

export default PostDetailsPage;
