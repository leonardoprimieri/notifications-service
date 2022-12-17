import { faker } from '@faker-js/faker';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const newNotification = {
      category: faker.random.word(),
      content: faker.random.words(2),
      recipientId: faker.random.alphaNumeric(20),
    };

    const { notification } = await sendNotification.execute({
      ...newNotification,
    });

    expect(notification).toBeTruthy();
  });
});
