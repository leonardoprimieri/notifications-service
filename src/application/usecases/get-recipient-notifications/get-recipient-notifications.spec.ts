import { faker } from '@faker-js/faker';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('Get Recipient Notifications', () => {
  it('should be able to get recipient notifications', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();

    const getRecipientNotification = new GetRecipientNotifications(
      notificationsRepository,
    );

    const recipientId = faker.random.alphaNumeric();

    const notification = makeNotification({
      recipientId,
    });

    await notificationsRepository.create(notification);
    await notificationsRepository.create(notification);

    const { notifications } = await getRecipientNotification.execute({
      recipientId,
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual([
      expect.objectContaining({ recipientId }),
      expect.objectContaining({ recipientId }),
    ]);
  });
});
