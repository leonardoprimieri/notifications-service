import { faker } from '@faker-js/faker';
import { Notification } from './notification';
import { NotificationContent } from './notification-content';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: faker.random.word(),
      content: new NotificationContent(faker.random.words(4)),
      recipientId: faker.random.alphaNumeric(),
    });

    expect(notification).toBeTruthy();
  });
});
