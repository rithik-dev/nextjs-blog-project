import styles from './hero.module.css';
import Image from "next/image";

const Hero = () => (
    <section className={styles.hero}>
        <div className={styles.image}>
            <Image
                src={'/images/site/buildings.jpeg'}
                alt={'An image'}
                width={300}
                height={300}
            />
        </div>
        <h1>Hi, I am Rithik</h1>
        <p>I am learning NextJS</p>
    </section>
)


export default Hero;
