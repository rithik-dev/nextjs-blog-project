// noinspection UnnecessaryLocalVariableJS

import fs from 'fs';
import path from 'path';
import matter from "gray-matter";
import IPost from "../interfaces/post";
import {removeFileExtension} from "./helper";

const POSTS_DIRECTORY = path.join(process.cwd(), 'posts');

export const getPostData = (postIdentifier: string) => {
    // removes the file extension
    const postSlug = removeFileExtension(postIdentifier);
    console.log(postSlug)

    const filePath = path.join(POSTS_DIRECTORY, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const {data, content} = matter(fileContent);

    const postData: IPost = {
        slug: postSlug,
        content,
        ...data,
    } as IPost;

    return postData;
}

export const getPostFiles = () => fs.readdirSync(POSTS_DIRECTORY);

export const getAllPosts = () => {
    const postFiles = getPostFiles();
    const allPosts = postFiles.map(postFile => getPostData(postFile));

    // sort the posts, most recent post on top
    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);
    return sortedPosts;
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);
    return featuredPosts;
}
