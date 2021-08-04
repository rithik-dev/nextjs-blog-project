import styles from './contact-form.module.css';
import React, {useState} from "react";

const ContactForm = () => {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const sendMessageHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        await fetch('/api/contact', {
            method: 'POST', body: JSON.stringify({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    return (
        <section className={styles.contact}>
            <h1>How can I help you?</h1>
            <form className={styles.form} onSubmit={sendMessageHandler}>
                <div className={styles.controls}>
                    <div className={styles.control}>
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id={"email"}
                            value={enteredEmail}
                            onChange={event => setEnteredEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div className={styles.control}>
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id={"name"}
                            value={enteredName}
                            onChange={event => setEnteredName(event.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className={styles.control}>
                    <label htmlFor="message">Your Message</label>
                    <textarea
                        id={"message"}
                        value={enteredMessage}
                        onChange={event => setEnteredMessage(event.target.value)}
                        rows={5}
                        required
                    />
                </div>
                <div className={styles.actions}>
                    <button>Send Message</button>
                </div>
            </form>
        </section>
    )
}

export default ContactForm;
