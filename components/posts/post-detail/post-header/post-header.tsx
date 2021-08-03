import styles from './post-header.module.css';
import React from "react";
import Image from "next/image";

type Props = {
    title: string;
    imageSrc: string;
}

const PostHeader: React.FC<Props> = ({imageSrc, title}) => (
    <header className={styles.header}>
        <h1>{title}</h1>
        <Image src={imageSrc} alt={title} width={200} height={150}/>
    </header>
)

export default PostHeader;
