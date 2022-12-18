import { SendNotification } from '@application/usecases';
import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { KafkaNotificationsController } from './kafka/controllers/kafka-notifications.controller';
import { KafkaConsumerService } from './kafka/kafka-consumer.service';

@Module({
  imports: [DatabaseModule],
  providers: [KafkaConsumerService, SendNotification],
  controllers: [KafkaNotificationsController],
})
export class MessagingModule {}
