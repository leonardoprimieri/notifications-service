import { Notification } from '@application/entities/notification';
import { NotificationContent } from '@application/entities/notification-content';
import { faker } from '@faker-js/faker';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count Recipient Notifications', () => {
  it('should be able to count recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(
      notificationsRepository,
    );

    const recipientIdOne = faker.random.alphaNumeric();
    const recipientIdTwo = faker.random.alphaNumeric();

    await notificationsRepository.create(
      makeNotification({
        recipientId: recipientIdOne,
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: recipientIdOne,
      }),
    );

    await notificationsRepository.create(
      makeNotification({
        recipientId: recipientIdTwo,
      }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: recipientIdOne,
    });

    expect(count).toBe(2);
  });
});
