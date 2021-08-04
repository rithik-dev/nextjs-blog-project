import styles from './contact-form.module.css';
import React, {useEffect, useState} from "react";
import INotification, {NotificationStatus} from "../../../interfaces/notification";
import Notification from "../../ui/notification/notification";

const sendContactData = async (contactDetails: object) => {
    const response = await fetch('/api/contact', {
        method: 'POST', body: JSON.stringify(contactDetails),
        headers: {'Content-Type': 'application/json'},
    });

    const data = await response.json();
    if (!response.ok)
        throw new Error(data?.message || 'Something went wrong');
}

const ContactForm = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredName, setEnteredName] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const [requestStatus, setRequestStatus] = useState<NotificationStatus | null>();
    const [requestError, setRequestError] = useState('');

    useEffect(() => {
        if (requestStatus !== NotificationStatus.pending) {

            const timer = setTimeout(() => {
                setRequestStatus(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [requestStatus]);

    const sendMessageHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        setRequestStatus(NotificationStatus.pending);
        try {
            await sendContactData({
                email: enteredEmail,
                name: enteredName,
                message: enteredMessage,
            });
            setRequestStatus(NotificationStatus.success);
            setEnteredEmail('');
            setEnteredName('');
            setEnteredMessage('');
        } catch (e) {
            setRequestError(e.message);
            setRequestStatus(NotificationStatus.error);
        }
    }

    let notification: INotification;

    switch (requestStatus!) {
        case NotificationStatus.success:
            notification = {
                title: 'Success',
                message: 'Message sent successfully',
                status: NotificationStatus.success,
            }
            break;
        case NotificationStatus.pending:
            notification = {
                title: 'Sending message...',
                message: 'Your message is on it\'s way',
                status: NotificationStatus.pending,
            }
            break;
        case NotificationStatus.error:
            notification = {
                title: 'Error',
                message: requestError,
                status: NotificationStatus.error,
            }
            break;
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
            {notification && <Notification notification={notification}/>}
        </section>
    )
}

export default ContactForm;
