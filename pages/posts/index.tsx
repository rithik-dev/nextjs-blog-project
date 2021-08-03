// noinspection JSUnusedGlobalSymbols

import AllPosts from "../../components/posts/all-posts/all-posts";
import IPost from "../../interfaces/post";

const DUMMY_POSTS: Array<IPost> = [
    {
        slug: 'getting-started-with-nextjs',
        title: 'Getting started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the react framework for production.',
        date: '2022-08-05',
    },
    {
        slug: 'getting-started-with-nextjs2',
        title: 'Getting started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the react framework for production.',
        date: '2022-08-05',
    },
    {
        slug: 'getting-started-with-nextjs3',
        title: 'Getting started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the react framework for production.',
        date: '2022-08-05',
    },
    {
        slug: 'getting-started-with-nextjs4',
        title: 'Getting started with NextJS',
        image: 'getting-started-nextjs.png',
        excerpt: 'NextJS is the react framework for production.',
        date: '2022-08-05',
    },
];

const AllPostsPage = () => (
    <AllPosts posts={DUMMY_POSTS}/>
)


export default AllPostsPage;
