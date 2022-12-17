export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;
}
