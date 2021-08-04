// noinspection JSUnusedGlobalSymbols

import styles from './post-content.module.css';
import PostHeader from "../post-header/post-header";
import IPost from "../../../../interfaces/post";
import {getPostImagePath} from "../../../../utils/helper";
import ReactMarkdown from "react-markdown";
import React from "react";
import Image from "next/image";
import {NormalComponents} from "react-markdown/src/ast-to-react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {atomDark} from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
    post: IPost;
}

const PostContent: React.FC<Props> = ({post}) => {
    const imageSrc = getPostImagePath(post);

    const customComponents: { p: NormalComponents['p'], code: NormalComponents['code'] } = {
        // img: (image) => {
        //     return <Image src={`/images/posts/${post.slug}/${image.src}`} alt={image.alt} width={600} height={300}/>
        // },

        // overriding because image is rendered in a <p> tag by default, which throws an error,
        // therefore, if an image is found inside p, we override.
        // eslint-disable-next-line react/display-name
        p: (paragraph) => {
            const {node} = paragraph;
            if (node.children[0].type === 'element' && node.children[0].tagName === 'img') {

                const image = node.children[0].properties!;
                return (
                    <div className={styles.image}>
                        <Image
                            src={`/images/posts/${post.slug}/${image.src}`}
                            alt={image.alt as string}
                            width={600}
                            height={300}
                        />
                    </div>
                )
            }
            return <p>{paragraph.children}</p>
        },

        // eslint-disable-next-line react/display-name
        code: (code) => {
            // code.lang is undefined?
            const codeLanguage = code.className?.split('-')[1];
            return (
                <SyntaxHighlighter language={codeLanguage} style={atomDark}>
                    {code.children}
                </SyntaxHighlighter>
            )
        }
    }

    return (
        <>
            <article className={styles.content}>
                <PostHeader title={post.title} imageSrc={imageSrc}/>
                <ReactMarkdown components={customComponents}>{post.content}</ReactMarkdown>
            </article>
        </>
    )
}

export default PostContent;
