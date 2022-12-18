import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';

interface UnreadNotificationRequest {
  notificationId: string;
}

type UnreadNotificationResponse = void;

export class UnreadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute({
    notificationId,
  }: UnreadNotificationRequest): Promise<UnreadNotificationResponse> {
    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) throw new NotificationNotFoundError();

    notification.unread();

    await this.notificationsRepository.save(notification);
  }
}
