import { faker } from '@faker-js/faker';
import { NotificationContent } from './notification-content';

describe('Notification content', () => {
  it('should be able to create a new notification content', () => {
    expect(new NotificationContent(faker.random.words(10))).toBeTruthy();
  });

  it('should not be able to create a new notification content, with less than 5 characters', () => {
    expect(
      () => new NotificationContent(faker.random.alphaNumeric(2)),
    ).toThrow();
  });

  it('should not be able to create a new notification content, with more than 240 characters', () => {
    expect(
      () => new NotificationContent(faker.random.alphaNumeric(241)),
    ).toThrow();
  });
});
