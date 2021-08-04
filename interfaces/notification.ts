export enum NotificationStatus {
    'success',
    'error',
    'pending',
}

export default interface INotification {
    title: string;
    message: string;
    status: NotificationStatus;
}
