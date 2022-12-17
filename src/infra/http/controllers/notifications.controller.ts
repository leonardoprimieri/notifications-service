import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/application/usecases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationMapper } from '../mappers/notification-mapper';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async create(
    @Body() { category, content, recipientId }: CreateNotificationBody,
  ) {
    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    return { notification: NotificationMapper.toHttp(notification) };
  }
}
