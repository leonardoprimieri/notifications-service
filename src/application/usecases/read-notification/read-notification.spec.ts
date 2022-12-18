import { faker } from '@faker-js/faker';
import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { NotificationNotFoundError } from '../errors/notification-not-found-error';
import { ReadNotification } from './read-notification';

describe('Read Notification', () => {
  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readNotification.execute({
      notificationId: notification.id,
    });

    const foundNotification = await notificationsRepository.findById(
      notification.id,
    );

    expect(foundNotification?.readAt).toEqual(expect.any(Date));
  });

  it('should not be able to read a notification that does not exists', () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const readNotification = new ReadNotification(notificationsRepository);

    expect(() => {
      return readNotification.execute({
        notificationId: faker.random.alphaNumeric(10),
      });
    }).rejects.toThrow(NotificationNotFoundError);
  });
});
