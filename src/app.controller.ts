import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getHello() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body;
    await this.prisma.notification.create({
      data: {
        category,
        content,
        id: randomUUID(),
        recipientId,
      },
    });
  }
}
