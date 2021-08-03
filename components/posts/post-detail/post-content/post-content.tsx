import styles from './post-content.module.css';
import PostHeader from "../post-header/post-header";
import IPost from "../../../../interfaces/post";
import {getPostImagePath} from "../../../../utils/helper";
import ReactMarkdown from "react-markdown";

const DUMMY_POST: IPost = {
    slug: 'getting-started-with-nextjs',
    title: 'Getting started with NextJS',
    image: 'getting-started-nextjs.png',
    date: '2022-08-05',
    content: '# This is a dummy post',
};

const PostContent = () => {
    const imageSrc = getPostImagePath(DUMMY_POST);

    return (
        <>
            <article className={styles.content}>
                <PostHeader title={DUMMY_POST.title} imageSrc={imageSrc}/>
                {DUMMY_POST.content && <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>}
            </article>
        </>
    )
}

export default PostContent;
