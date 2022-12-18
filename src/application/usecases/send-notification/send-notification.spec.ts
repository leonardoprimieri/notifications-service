import { faker } from '@faker-js/faker';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const sendNotification = new SendNotification(notificationsRepository);

    const newNotification = {
      category: faker.random.word(),
      content: faker.random.words(2),
      recipientId: faker.random.alphaNumeric(20),
    };

    const { notification } = await sendNotification.execute({
      ...newNotification,
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
