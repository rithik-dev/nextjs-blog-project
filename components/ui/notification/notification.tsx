import React from 'react';

import styles from './notification.module.css';
import INotification, {NotificationStatus} from "../../../interfaces/notification";

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

    return (
        <div className={activeClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}

export default Notification;
