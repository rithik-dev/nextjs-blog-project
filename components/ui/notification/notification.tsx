import React from 'react';

import styles from './notification.module.css';
import INotification, {NotificationStatus} from "../../../interfaces/notification";
import ReactDOM from 'react-dom';

type Props = {
    notification: INotification;
}

const Notification: React.FC<Props> = ({notification}) => {
    const {title, message, status} = notification;

    let statusClasses = '';
    switch (status) {
        case NotificationStatus.success:
            statusClasses = styles.success;
            break;
        case NotificationStatus.error:
            statusClasses = styles.error;
            break;
        case NotificationStatus.pending:
            statusClasses = styles.pending;
            break;
    }

    const activeClasses = `${styles.notification} ${statusClasses}`;

    //  React portal will render the notification component in another div,
    //  apart from the deeply nested tree of the main app.
    //
    // Currently, it uses the div with id as "notifications" defined in the _document file.
    return ReactDOM.createPortal(
        (
            <div className={activeClasses}>
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
        ),
        document.getElementById('notifications')!,
    );
}

export default Notification;
