import { faker } from '@faker-js/faker';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';
import { ReadNotification } from '../read-notification/read-notification';
import { UnreadNotification } from './unread-notification';

describe('Unread Notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);
    const unreadNotification = new UnreadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    const foundNotification = await notificationsRepository.findById(
      notification.id,
    );

    expect(foundNotification?.readAt).toBeNull();
  });

  it('should not be able to unread a notification that does not exists', () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const unreadNotification = new UnreadNotification(notificationsRepository);

    expect(async () => {
      return await unreadNotification.execute({
        notificationId: faker.random.alphaNumeric(10),
      });
    }).rejects.toThrow(NotificationNotFoundError);
  });
});
