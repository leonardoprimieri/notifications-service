import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { SendNotification } from 'src/application/usecases/send-notification';
import { NotificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
