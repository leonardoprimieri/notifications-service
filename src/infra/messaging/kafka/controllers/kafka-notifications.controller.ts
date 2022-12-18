import { SendNotification } from '@application/usecases';
import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

interface SendNotificationDTO {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class KafkaNotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern('notifications.send-notification')
  async handleSendNotification(
    @Payload() { category, content, recipientId }: SendNotificationDTO,
  ) {
    await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });
  }
}
