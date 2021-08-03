import IPost from "../interfaces/post";

export const formatDate = (date: string): string => new Date(date).toLocaleDateString('en-US', {
    day: "numeric",
    month: "long",
    year: "numeric",
});

export const getPostImagePath = (post: IPost) => `/images/posts/${post.slug}/${post.image}`;
