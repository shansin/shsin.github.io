import styles from './Intro.module.css';

export default function Intro({ contentHtml }) {
    return (
        <section className={styles.intro}>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </section>
    );
}
