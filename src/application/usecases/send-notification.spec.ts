import { faker } from '@faker-js/faker';
import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const newNotification = {
      category: faker.random.word(),
      content: faker.random.words(2),
      recipientId: faker.random.alphaNumeric(20),
    };

    await sendNotification.execute({
      ...newNotification,
    });

    expect(notifications).toHaveLength(1);
  });
});
