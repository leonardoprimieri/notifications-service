import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { faker } from '@faker-js/faker';

type Override = Partial<NotificationProps>;

export const makeNotification = (override: Override = {}) => {
  return new Notification({
    category: faker.random.word(),
    content: new NotificationContent(faker.random.alphaNumeric(20)),
    recipientId: faker.random.alphaNumeric(),
    ...override,
  });
};
