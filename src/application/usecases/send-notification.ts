import { Notification } from '../entities/notification';
import { NotificationContent } from '../entities/notification-content';

interface SendNotificationRequest {
  content: string;
  category: string;
  recipientId: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      category,
      content: new NotificationContent(content),
      recipientId,
    });

    return { notification };
  }
}
