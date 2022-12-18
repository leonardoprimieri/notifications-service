import { Notification } from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new NotificationContent(raw.content),
        recipientId: raw.recipientId,
        canceledAt: raw?.canceledAt,
        createdAt: raw?.createdAt,
        readAt: raw?.createdAt,
      },
      raw.id,
    );
  }
}
